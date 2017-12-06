require('dotenv').config();
const hostname = require('os').hostname();
let sauceLabsUsername;
let saucelabsAccesKey;
let browserName = 'chrome';
let driver = 'selenium-standalone';

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
    services: [driver],
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
