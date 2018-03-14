require('dotenv').config();
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const os = require('os');
const visualRegression = require('./e2e/utils/visual-regression');
const ScreenshotService = require('./e2e/utils/screenshot');
const slugify = require('slugify');
const { getScreenshotName, getRefPicName, getDiffScreenshotName } = visualRegression;

const resolution = { width: 1400, height: 1050 };
const screenResolution = resolution.width.toString() + 'x' + resolution.height.toString();
const e2eProfile = (process.env.E2EPROFILE || '').split(',').filter(profile => profile !== '');
const browsers = [];
let isDefaultBrowser = false;
let sauceLabsUsername;
let saucelabsAccesKey;
let driver = 'selenium-standalone';

if (e2eProfile.includes('saucelight')) {
  browsers.push({
    browserName: 'chrome',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
  });

  driver = 'sauce';
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;

}
if (e2eProfile.includes('sauceextended')) {
  browsers.push({
    browserName: 'firefox',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
  }, {
    browserName: 'chrome',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
  }, {
    browserName: 'chrome',
    version: 'latest-1',
    screenResolution: screenResolution,
    platform: 'Windows 10'
  }, {
    browserName: 'firefox',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'Windows 10'
  }, {
    browserName: 'chrome',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'Windows 10'
  }, {
    browserName: 'chrome',
    version: 'latest-1',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
  });

  driver = 'sauce';
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;

}

if (e2eProfile.includes('chrome')) {
  browsers.push({
    width: resolution.width,
    height: resolution.height,
    browserName: 'chrome'
  });
}

if (e2eProfile.includes('headless-chrome')) {
  browsers.push({
    width: resolution.width,
    height: resolution.height,
    browserName: 'chrome',
    chromeOptions: {
      //args: [
      //'disable-infobars',
      /*'--headless',  '--remote-debugging-port=9222'*/
      //],
      args: [
        'disable-infobars',
        //'--remote-debugging-port=9222',
        //'--user-data-dir=/tmp/', // + Date.now(),
        //'--noerrdialogs',
        //'--no-first-run'
        //'--headless'
      ]
      //binary:
      //'/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
    }
  });
}

if (e2eProfile.includes('firefox')) {
  browsers.push({
    width: resolution.width,
    height: resolution.height,
    browserName: 'firefox'
  });
}

if (e2eProfile.includes('headless-firefox')) {
  browsers.push({
    width: resolution.width,
    height: resolution.height,
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless']
    }
  });
}

if (e2eProfile.length === 0) {
  browsers.push({
    width: resolution.width,
    height: resolution.height,
    browserName: 'chrome',
    chromeOptions: {
      'args': ['disable-infobars', '--headless']
    }
  });
  isDefaultBrowser = true;
}
const frames = {};
exports.config = {
  seleniumInstallArgs: { version: '3.4.0' },
  seleniumArgs: { version: '3.4.0' },

  specs: [
    './e2e/test/**/*.js'
    //'./e2e/test/card-tests/card-test.js'
  ],
  exclude: [],

  maxInstances: 4,
  capabilities: browsers,

  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: false,
  bail: 0,
  screenshotPath: process.env.E2E_ERRORSHOTS_OUTPUT,
  baseUrl: `http://localhost:${process.env.STATIC_PORT || 4567}`,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    driver,
    'devtools',
    'visual-regression',
    'static-server',
    ScreenshotService
  ],
  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getRefPicName(),
      screenshotName: getScreenshotName(isDefaultBrowser),
      diffName: getDiffScreenshotName(isDefaultBrowser),
      misMatchTolerance: 3.0
    })
  },
  user: sauceLabsUsername,
  key: saucelabsAccesKey,
  sauceConnect: true,

  sauceConnectOpts: {
    tunnelIdentifier: os.hostname()
  },

  framework: 'mocha',
  reporters: ['spec', 'junit'],

  reporterOptions: {
    junit: {
      outputDir: process.env.E2E_OUTPUT
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 99999999,
    require: './e2e/utils/mocha-setup.js'
  },

  before: function(capabilities, tests) {
    browser.currentTest = tests[0];
    if (capabilities.width && capabilities.height) {
      browser.windowHandleSize({
        width: capabilities.width,
        height: capabilities.height
      });
    }
    browser.driver = driver;
    //browser.url('chrome://version');
    //require('fs').writeFileSync('./version.html', browser.getSource());
  },
  beforeTest: (test) => {
    const testName = slugify(test.fullTitle, {
      lower: true
    });
    if (!frames[testName]) {
      frames[testName] = [];
    }
    console.log('before test: %s', testName);
    browser.on('Page.screencastFrame', result => {
      
      browser.cdp('Page', 'screencastFrameAck', {
        sessionId: result.sessionId
      });
      const binaryBlob = Buffer.from(result.data, 'base64');
      const len = frames[testName].length;
      const framePath = `${testName}-${len}.jpg`;
      console.log('before test: %s (%s)', testName, len);
      frames[testName].push({ framePath });
      require('fs').writeFileSync('./imgs/' + framePath, binaryBlob);
    });
    browser.cdp('Page', 'startScreencast', {
      format: 'png',
      quality: 80,
      everyNthFrame: 1
    });
  },
  afterTest: (test) => {
    browser.cdp('Page', 'stopScreencast');
    browser.removeAllListeners('Page.screencastFrame');
    const testName = slugify(test.fullTitle, { lower: true });
    
    console.log('after test: %s (%s)', testName, frames[testName].length);
    const files = frames[testName].map(frame => {
      return `file ${frame.framePath}`;
    });

    const inputFiles = `./imgs/${testName}.txt`;
    const outputFile = `./imgs/${testName}.mp4`;
    require('fs').writeFileSync(inputFiles, files.join('\n'));
    const args = [
      '-safe',
      '0',
      '-y',
      '-f',
      'concat',
      '-i',
      inputFiles,
      '-crf',
      '30',
      '-minrate',
      '500k',
      '-maxrate',
      '2000k',
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-vf',
      'scale=trunc(iw/2)*2:trunc(ih/2)*2', // make sure the size is dividable by 2
      '-r',
      '1',
      outputFile
    ];
    console.log('ffmpeg %s', args.join(' '));
    
    require('child_process').execFileSync('ffmpeg', args);
    unlink(inputFiles);
    frames[testName].forEach(frame => {
      unlink(`./imgs/${frame.framePath}`);
    });
    console.log('file written to %s', outputFile);
  },
  staticServerPort: process.env.STATIC_PORT || 4567,
  staticServerFolders: [
    {
      mount: '/',
      path: './public'
    }
  ]
};
const fs = require('fs');
function unlink(file) {
  console.log('unlink %s', file);
  fs.unlinkSync(file);
}