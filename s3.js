const globby = require('globby');
const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

require('aws-sdk-then').patch(AWS);

const BUCKET = 'intellyo';
const PATH_PREFIX = 'application-design-system';
const HOSTNAME = 'ux.intellyo.com';
const REDIRECTS = [];
const S3 = new AWS.S3({
  region: 'eu-central-1',
  signatureVersion: 'v4'
});

async function batch(items, concurrency, fn) {
  while (items.length) {
    const batch = items.slice(0, concurrency);
    items = items.slice(concurrency);
    await Promise.all(batch.map(fn));
  }
}

function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) return reject(err);
      resolve(stat.isDirectory());
    });
  });
}

function uploader(options = {}) {
  return async ([from, to]) => {
    if (await isDir(from)) return Promise.resolve();
    console.log('Uploading %s to s3://%s/%s/%s', from, BUCKET, PATH_PREFIX, to);
    return S3.putObject({
      ...options,
      Body: fs.createReadStream(from),
      ACL: 'public-read',
      Bucket: BUCKET,
      Key: PATH_PREFIX + '/' + to,
      ContentType: mime.lookup(from),
    });
  };
}

async function redirect([from, to]) {
  console.log('Creating redirect from %s to %s (s3://%s/%s%s)', from, to, BUCKET, PATH_PREFIX, from);
  return S3.putObject({
    Body: '',
    ACL: 'public-read',
    Bucket: BUCKET,
    Key: PATH_PREFIX + from,
    ContentType: 'text/html',
    WebsiteRedirectLocation: 'https://' + HOSTNAME + to,
  });
}

function del(options = {}) {
  return async (items) => {
    console.log('Deleting %s items\n\t%s', items.length, items.join('\n\t'));
    return S3.deleteObjects({
      ...options,
      Bucket: BUCKET,
      Delete: {
        Objects: items.map(key => ({
          Key: key
        }))
      }
    });
  };
}

function url(file) {
  if (file === 'index.html') return file;
  return path.normalize(path.join(path.dirname(file), path.basename(file, '.html')));
}

async function setRedirects() {
  await batch(REDIRECTS, 10, redirect);
}

async function deploy() {
  const htmls = await globby('**/*.html');
  await batch(htmls.map(file => [file, url(file)]), 10, uploader({
    CacheControl: 'max-age=1800'
  }));

  const assets = await globby('**/*', {
    ignore: '**/*.html',
  });
  await batch(assets.map(file => [file, url(file)]), 10, uploader({
    CacheControl: 'max-age=31536000'
  }));

  await setRedirects();
}
async function start() {
  const response = await S3.listObjects({
    Bucket: BUCKET,
    Prefix: PATH_PREFIX + '/'
  });

  const purgable = [
    'application/octet-stream',
    'text/plain',
    'application/xml',
    'text/html'
  ];
  const deletable = response.data.Contents
    .filter((item) => {
      const type = mime.lookup(item.Key);
      if (item.Key.slice(-1) === '/') {
        // if the last character is slack, it's a directory
        // we dont wanna touch directories
        return false;
      }
      return purgable.includes(type);
    })
    .map(item => item.Key)
    .reduce((prev, item, i) => {
      // s3 api only allows 1000 objects per req so
      // we split the objects into 1000 length big arrays
      const ndx = Math.floor(i / 1000);
      if (!prev[ndx]) {
        prev[ndx] = [];
      }
      prev[ndx].push(item);
      return prev;
    }, []);
  await batch(deletable, 1, del());
  return deploy();
}

start()
  .then(
    () => console.log('done'),
    err => {
      console.error(err.stack);
      process.exit(1);
    }
  );
