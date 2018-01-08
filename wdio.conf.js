require('dotenv').config();
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const os = require('os');
const visualRegression = require('./e2e/utils/visual-regression');


const { getScreenshotName, getRefPicName, getDiffScreenshotName } = visualRegression;

const resolution = { width: 1024, height: 768 };
const screenResolution = resolution.width.toString() + 'x' + resolution.height.toString();
const browserName = 'chrome';
let isDefaultBrowser = true;
let isItCiRun = false;
let sauceLabsUsername;
let saucelabsAccesKey;
let driver = 'selenium-standalone';
let browsers = [];

if (process.env.CI || process.env.TEST_PROVIDER === 'sauce') {
  isDefaultBrowser = false;
  isItCiRun = true;
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;
  driver = 'sauce';
}

if (process.env.BROWSER) {
  isDefaultBrowser = false;
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
      'args': ['disable-infobars', '--headless']
    }
  }];
}

exports.config = {

  specs: [
    './e2e/test/**/*.js'
  ],
  exclude: [
  ],

  maxInstances: 10,

  capabilities: (process.env.CI || process.env.TEST_PROVIDER === 'sauce') ? [{
    browserName: 'firefox',
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
  }, {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['disable-infobars']
    },
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
    'chromeOptions': {
      'args': ['disable-infobars']
    },
    version: 'latest',
    screenResolution: screenResolution,
    platform: 'Windows 10'
  }, {
    browserName: 'chrome',
    version: 'latest-1',
    screenResolution: screenResolution,
    platform: 'macOS 10.13'
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
      referenceName: getRefPicName(),
      screenshotName: getScreenshotName(isItCiRun, isDefaultBrowser),
      diffName: getDiffScreenshotName(isItCiRun, isDefaultBrowser),
      misMatchTolerance: 3.0
    }),
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
    timeout: 99999999
  },

  before: function (capabilities) {
    if (capabilities.width && capabilities.height) {
      browser.windowHandleSize({
        width: capabilities.width,
        height: capabilities.height
      });
    }
  }
};
