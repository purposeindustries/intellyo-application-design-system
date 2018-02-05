require('dotenv').config();
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const os = require('os');
const visualRegression = require('./e2e/utils/visual-regression');
const ScreenshotService = require('./e2e/utils/screenshot');

const { getScreenshotName, getRefPicName, getDiffScreenshotName } = visualRegression;

const resolution = { width: 1400, height: 1050 };
const screenResolution = resolution.width.toString() + 'x' + resolution.height.toString();
const browserName = 'chrome';
const e2eProfile = process.env.E2EPROFILE || '';
let isDefaultBrowser = true;
let sauceLabsUsername;
let saucelabsAccesKey;
let driver = 'selenium-standalone';
let browsers = [];

if (e2eProfile.includes('sauce')) {
  isDefaultBrowser = false;
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;
  driver = 'sauce';

  if (e2eProfile === 'saucelight') {
    browsers = [{
      browserName: 'chrome',
      version: 'latest',
      screenResolution: screenResolution,
      platform: 'macOS 10.13'
    }];
  } else if (e2eProfile === 'sauceextended') {
    browsers = [{
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
      'chromeOptions': {
        'args': ['disable-infobars']
      },
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
    }];
  }
} else if (!e2eProfile.includes('sauce') && e2eProfile !== '') {
  isDefaultBrowser = false;
  e2eProfile.split(',').forEach(element => {
    if (element === 'headless-chrome') {
      browsers.push({
        width: resolution.width,
        height: resolution.height,
        browserName: 'chrome',
        chromeOptions: {
          'args': ['--headless']
        } });
    } else if (element === 'headless-firefox') {
      browsers.push({
        width: resolution.width,
        height: resolution.height,
        browserName: element.split('-')[1],
        'moz:firefoxOptions': {
          args: ['-headless']
        }
      });
    } else if (element !== 'chrome') {
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
          'args': ['disable-infobars', '--headless']
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
  seleniumInstallArgs: {version: '3.4.0'},
  seleniumArgs: {version: '3.4.0'},

  specs: [
    './e2e/test/**/*.js'
  ],
  exclude: [
  ],

  maxInstances: 10,

  capabilities: browsers,

  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: false,
  bail: 0,
  screenshotPath: process.env.E2E_ERRORSHOTS_OUTPUT,
  baseUrl: 'http://localhost:9000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [driver, 'visual-regression', ScreenshotService],
  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getRefPicName(),
      screenshotName: getScreenshotName(isDefaultBrowser),
      diffName: getDiffScreenshotName(isDefaultBrowser),
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
    timeout: 99999999,
    require: './e2e/utils/mocha-setup.js'
  },

  before: function (capabilities, tests) {
    browser.currentTest = tests[0];
    if (capabilities.width && capabilities.height) {
      browser.windowHandleSize({
        width: capabilities.width,
        height: capabilities.height
      });
    }
  }
};
