require('dotenv').config();
var path = require('path');
var VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const hostname = require('os').hostname();
let sauceLabsUsername;
let saucelabsAccesKey;
let browserName = 'chrome';
let driver = 'selenium-standalone';

function getScreenshotName(basePath) {
  return function(context) {
    var type = context.type;
    var testName = context.test.title;
    var browserVersion = parseInt(context.browser.version, 10);
    var browserName = context.browser.name;
    var browserViewport = context.meta.viewport;
    var browserWidth = browserViewport.width;
    var browserHeight = browserViewport.height;

    return path.join(basePath, `${testName}_${type}_${browserName}_v${browserVersion}_${browserWidth}x${browserHeight}.png`);
  };
}

function getRefPicName(basePath) {
  return function(context) {
    return path.join(basePath, `reference.png`);
  };
}

if (process.env.CI || process.env.TEST_PROVIDER === 'sauce') {
  sauceLabsUsername = process.env.SAUCE_LABS_USERNAME;
  saucelabsAccesKey = process.env.SAUCE_LABS_ACCESS_KEY;
  driver = 'sauce';
}

if (process.env.BROWSER) {
  browserName = process.env.BROWSER;
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
      version: 'latest'
    }, {
      browserName: 'chrome',
      version: 'latest'
    }, {
      browserName: 'chrome',
      version: 'latest-1'
    }, {
      browserName: 'MicrosoftEdge',
      version: 'latest'
    }] : [{
      browserName: browserName,
    }],

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
      referenceName: getRefPicName(process.env.E2E_SCREENSHOTS + 'reference/'),
      screenshotName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'screen/'),
      diffName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'diff/'),
      misMatchTolerance: 0.7,
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
        ui: 'bdd'
    },
};
