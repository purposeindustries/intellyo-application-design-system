require('dotenv').config();
const path = require('path');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const hostname = require('os').hostname();
let sauceLabsUsername;
let saucelabsAccesKey;
let browserName = 'chrome';
let driver = 'selenium-standalone';
let browsers = [];

if (process.env.BROWSER) {
  process.env.BROWSER.split(',').forEach(element => browsers.push({browserName: element}));
}

else {
  browsers = [{browserName: browserName}];
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

    return path.join(basePath, `${parent}/${testName}_${type}_${browserName}_v${browserVersion}_${browserWidth}x${browserHeight}.png`);
  };
}


function getRefPicName(basePath) {
  return function (context) {
    const testName = context.test.title;
    const parent = context.test.parent;
    const browserName = context.browser.name;
    const lastWordOfTestName = testName.split(" ").pop();

    if (typeof context.test.parent !== undefined && context.test.title.includes('browser compare visual regression')) {
      return path.join(basePath, `${parent}/whole_page_reference.png`);
    }
    return path.join(basePath, `${parent}/${testName}/${lastWordOfTestName}_reference_pic.png`);
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
      referenceName: getRefPicName(process.env.E2E_SCREENSHOTS + 'reference/'),
      screenshotName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'screen/'),
      diffName: getScreenshotName(process.env.E2E_SCREENSHOTS + 'diff/'),
      misMatchTolerance: 1.0,
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
};
