require('dotenv').config();
const slugify = require('slugify');
const path = require('path');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const hostname = require('os').hostname();
const dateFormat = require('dateformat');

const resolution = {width: 1280, height: 768}
const screenResolution = resolution.width.toString() + 'x' + resolution.height.toString()
const browserName = 'chrome';
let sauceLabsUsername;
let saucelabsAccesKey;
let driver = 'selenium-standalone';
let browsers = [];

if (process.env.BROWSER) {
  process.env.BROWSER.split(',').forEach(element => {
    if (element !== 'chrome') {
      browsers.push({
        width: resolution.width,
        height: resolution.height,
        browserName: element
      });
    } else {
      browsers.push({
        width: resolution.width,
        height: resolution.height,
        browserName: element,
        chromeOptions: {
          'args': ['disable-infobars']
        } });
    }
  });
} else {
  browsers = [{
    width: resolution.width,
    height: resolution.height,
    browserName: browserName,
    chromeOptions: {
      'args': ['disable-infobars']
    }
  }];
}

function getScreenshotName(basePath) {
  return function (context) {
    const type = context.type;
    const testName = context.test.title;
    const browserVersion = parseInt(context.browser.version, 10);
    const browserName = context.browser.name;
    const browserViewport = context.meta.viewport;
    const browserWidth = browserViewport.width;
    const browserHeight = browserViewport.height;
    const parent = context.test.parent;
    const time = dateFormat(new Date(), 'dddd-mmmm-dS-yyyy-h-MM-ss-TT');

    return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${type}_${browserName.toLowerCase()}_v${browserVersion}_${browserWidth}x${browserHeight}_${slugify(time.toLowerCase())}.png`);
  };
}


function getRefPicName(basePath) {
  return function (context) {
    const testName = context.test.title;
    const parent = context.test.parent;
    const lastWordOfTestName = testName.split(' ').pop();

    if (typeof context.test.parent !== undefined && context.test.title.includes('browser compare visual regression')) {
      return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/whole_page_reference.png`);
    }
    return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${lastWordOfTestName.toLowerCase()}_reference_pic.png`);
  };
}

if (process.env.CI || process.env.TEST_PROVIDER === 'sauce') {
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;
  driver = 'sauce';
}

exports.config = {

    specs: [
        './e2e/test/*.js'
    ],
    exclude: [
    ],

    maxInstances: 10,

    capabilities: (process.env.CI || process.env.TEST_PROVIDER === 'sauce') ? [{
      browserName: 'firefox',
      version: 'latest',
      screenResolution: screenResolution
    }, {
      browserName: 'chrome',
      'chromeOptions': {
        'args': ['disable-infobars']
      },
      version: 'latest',
      screenResolution: screenResolution
    }, {
      browserName: 'chrome',
      version: 'latest-1',
      screenResolution: screenResolution
    // }, {
    //   browserName: 'MicrosoftEdge',
    //   version: 'latest'
    }] : browsers,

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: process.env.E2E_ERRORSHOTS_OUTPUT,
    baseUrl: 'http://localhost:9000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [driver, 'visual-regression'],
    visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getRefPicName('./e2e/screenshots/reference/'),
      screenshotName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'screen/'),
      diffName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'diff/'),
      misMatchTolerance: 3.0,
    }),
    },
    user: sauceLabsUsername,
    key: saucelabsAccesKey,
    sauceConnect: true,

    sauceConnectOpts: {
      tunnelIdentifier: hostname
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
        timeout: 99999999
    },

    before: function(capabilities) {
      if (capabilities.width && capabilities.height) {
         browser.windowHandleSize({
           width: capabilities.width,
           height: capabilities.height
         });
      }

    }
};
