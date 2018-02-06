require('dotenv').config();
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const os = require('os');
const visualRegression = require('./e2e/utils/visual-regression');
const ScreenshotService = require('./e2e/utils/screenshot');

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
      'args': ['disable-infobars', '--headless']
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
  baseUrl: `http://localhost:${process.env.STATIC_PORT || 4567}`,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [driver, 'visual-regression', 'static-server', ScreenshotService],
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
    browser.driver = driver;
  },
  staticServerPort: process.env.STATIC_PORT || 4567,
  staticServerFolders: [{
    mount: '/', path: './public'
  }]
};
