const dateFormat = require('dateformat');
const slugify = require('slugify');
const path = require('path');
const testDebug = require('debug')('test');
const testDev = require('debug')('testDev');
const mkdirp = require('mkdirp');
const resemble = require('node-resemble-js');
const fs = require('fs');

let basePathRef = '';
let basePathDiff = '';
let basePathScreen = '';

function getMisMatchPercentage(results, testName) {
  testDev('testName: ' + testName
  + '\nbrowser: ' + browser.desiredCapabilities.browserName
  + '\nplatform: ' + browser.desiredCapabilities.platform
  + '\nmisMatchPercentage: ', results[0].misMatchPercentage);
  return results[0].misMatchPercentage;
}

function setBasePath(dirPath) {
  basePathRef = dirPath + '/pics/reference/';
  basePathDiff = dirPath + '/pics/diff/';
  basePathScreen = dirPath + '/pics/screen/';
}

function setBasePath2(dirPath) {
  basePathRef = dirPath + '/pics/reference/';
  basePathDiff = dirPath + '/pics/diff/';
  basePathScreen = dirPath + '/pics/screen/';
}

function createTestName() {
  const testName = browser.currentTestName;
  const browserVersion = parseInt(browser.desiredCapabilities.version, 10);
  const browserName = browser.desiredCapabilities.browserName;
  const platform = browser.desiredCapabilities.platform ? browser.desiredCapabilities.platform : '';
  const parent = browser.currentDescribe;
  const time = dateFormat(new Date(), 'hh-MM-ss-TT-yyyy-mm-dd');

  mkdirp(basePathScreen + `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}`, function (err) {
    if (err) {
      testDev(err);
    }
  });

  return `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${slugify(time.toLowerCase())}_${platform.toLowerCase()}_${browserName.toLowerCase()}_v${browserVersion}.png`;
}


module.exports.takeScreenshotAndGetWholePageCompareResult = (options) => {
  let misMatchTolerance;
  let ignoreComparisonValue = '';

  if (!options.testDirPath) {
    options.testDirPath = path.dirname(browser.currentTest);
  }

  setBasePath(options.testDirPath);

  misMatchTolerance = options.defaultTolerance;

  if (options.windowsTolerance
    && browser.desiredCapabilities.platform
    && browser.desiredCapabilities.platform.includes('Windows')) {
    misMatchTolerance = options.windowsTolerance;
  }

  if (options.firefoxTolerance
    && browser.desiredCapabilities.browserName
    && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.firefoxTolerance;
  }

  if (options.ffAndWindowsTolerance
  && browser.desiredCapabilities.browserName
  && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.ffAndWindowsTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  const misMatchPercentage = getMisMatchPercentage(browser.checkViewport({ ignoreComparison: ignoreComparisonValue }), browser.currentTestName);
  const isTestPassed = (misMatchPercentage <= misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  testDebug('failing testName: ' + browser.currentTestName
  + '\nbrowser: ' + browser.desiredCapabilities.browserName
  + '\nplatform: ' + browser.desiredCapabilities.platform
  + '\nmisMatchTolerance: ' + misMatchTolerance
  + '\nmisMatchPercentage: ' + misMatchPercentage);

  return isTestPassed;
};

module.exports.takeScreenShotOfElement = (elementSelector, options) => {
  let misMatchTolerance;
  let ignoreComparisonValue = '';

  if (!options.testDirPath) {
    options.testDirPath = path.dirname(browser.currentTest);
  }

  setBasePath(options.testDirPath);

  misMatchTolerance = options.defaultTolerance;

  if (options.windowsTolerance
    && browser.desiredCapabilities.platform
    && browser.desiredCapabilities.platform.includes('Windows')) {
    misMatchTolerance = options.windowsTolerance;
  }

  if (options.firefoxTolerance
    && browser.desiredCapabilities.browserName
    && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.firefoxTolerance;
  }

  if (options.ffAndWindowsTolerance
  && browser.desiredCapabilities.browserName
  && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.ffAndWindowsTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  const misMatchPercentage = getMisMatchPercentage(browser.checkElement(elementSelector, { ignoreComparison: ignoreComparisonValue }), browser.currentTestName);
  const isTestPassed = (misMatchPercentage < misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  testDebug('failing testName: ' + browser.currentTestName
  + '\nbrowser: ' + browser.desiredCapabilities.browserName
  + '\nplatform: ' + browser.desiredCapabilities.platform
  + '\nmisMatchTolerance: ' + misMatchTolerance
  + '\nmisMatchPercentage: ' + misMatchPercentage
  + '\nproblematic elementSelector: ' + elementSelector);

  return isTestPassed;
};

module.exports.getScreenshotName = (isDefaultBrowser) => {
  return function (context) {
    const type = context.type;
    const testName = context.test.title;
    const browserVersion = parseInt(context.browser.version, 10);
    const browserName = (isDefaultBrowser) ? 'chrome' : context.browser.name;
    const browserViewport = context.meta.viewport;
    const browserWidth = browserViewport.width;
    const browserHeight = browserViewport.height;
    const parent = context.test.parent;
    const platform = browser.desiredCapabilities.platform ? browser.desiredCapabilities.platform : '';
    const time = dateFormat(new Date(), 'hh-MM-ss-TT-yyyy-mm-dd');

    if (process.env.CIRCLE_ARTIFACTS) {
      basePathScreen = process.env.E2E_SCREENSHOTS + 'screen/';
    }

    return path.join(basePathScreen, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${slugify(time.toLowerCase())}_${type}_${platform.toLowerCase()}_${type}_${browserName.toLowerCase()}_v${browserVersion}_${browserWidth}x${browserHeight}.png`);
  };
};

module.exports.getDiffScreenshotName = (isDefaultBrowser) => {
  return function (context) {
    const type = context.type;
    const testName = context.test.title;
    const browserVersion = parseInt(context.browser.version, 10);
    const browserName = (isDefaultBrowser) ? 'chrome' : context.browser.name;
    const browserViewport = context.meta.viewport;
    const browserWidth = browserViewport.width;
    const browserHeight = browserViewport.height;
    const parent = context.test.parent;
    const platform = browser.desiredCapabilities.platform ? browser.desiredCapabilities.platform : '';
    const time = dateFormat(new Date(), 'hh-MM-ss-TT-yyyy-mm-dd');

    if (process.env.CIRCLE_ARTIFACTS) {
      basePathDiff = process.env.E2E_SCREENSHOTS + 'diff/';
    }

    return path.join(basePathDiff, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${slugify(time.toLowerCase())}_${type}_${platform.toLowerCase()}_${type}_${browserName.toLowerCase()}_v${browserVersion}_${browserWidth}x${browserHeight}.png`);
  };
};


module.exports.getRefPicName = () => {
  return function (context) {
    const testName = context.test.title;
    const parent = context.test.parent;
    const lastWordOfTestName = testName.split(' ').pop();

    if (typeof context.test.parent !== undefined && context.test.title.includes('browser compare visual regression')) {
      return path.join(basePathRef, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/whole_page_reference.png`);
    }
    return path.join(basePathRef, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${lastWordOfTestName.toLowerCase()}_reference_pic.png`);
  };
};

function getRefPicName() {
  const testName = browser.currentTestName;
  const parent = browser.currentDescribe;
  const lastWordOfTestName = testName.split(' ').pop();

  if (typeof parent !== undefined && testName.includes('browser compare visual regression')) {
    return path.join(basePathRef, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/whole_page_reference.png`);
  }
  return basePathRef + `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${lastWordOfTestName.toLowerCase()}_reference_pic.png`;
}

function handleTakenScreenshot(data, misMatchTolerance, selector) {
  const isTestPassed = (data.misMatchPercentage < misMatchTolerance) || false;


  if (!isTestPassed) {
    mkdirp(basePathDiff + `${slugify(browser.currentDescribe.toLowerCase())}/${slugify(browser.currentTestName.toLowerCase())}`, function (err) {
      if (err) {
        testDev(err);
      }
    });
    data.getDiffImage().pack().pipe(fs.createWriteStream(basePathDiff + createTestName()));
    testDebug('failing testName: ' + browser.currentTestName
    + '\nbrowser: ' + browser.desiredCapabilities.browserName
    + '\nplatform: ' + browser.desiredCapabilities.platform
    + '\nmisMatchTolerance: ' + misMatchTolerance
    + '\nmisMatchPercentage: ' + data.misMatchPercentage
    + '\nproblematic elementSelector: ' + selector);
  }
  return isTestPassed;
}
module.exports.takeScreenShotOfElement2 = (selector, options) => {
  let misMatchTolerance = options.defaultTolerance;

  setBasePath2(path.dirname(browser.currentTest));
  const testPathAndName = basePathScreen + createTestName();

  if (options.windowsTolerance
    && browser.desiredCapabilities.platform
    && browser.desiredCapabilities.platform.includes('Windows')) {
    misMatchTolerance = options.windowsTolerance;
  }

  if (options.firefoxTolerance
    && browser.desiredCapabilities.browserName
    && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.firefoxTolerance;
  }

  if (options.ffAndWindowsTolerance
  && browser.desiredCapabilities.browserName
  && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.ffAndWindowsTolerance;
  }

  browser.saveElementScreenshot(selector, testPathAndName);
  const img = resemble(getRefPicName()).compareTo(testPathAndName);
  if (options.ignoreComparison === true) {
    img.ignoreColors();
  }
  return img.onComplete(function (data) {
    return handleTakenScreenshot(data, misMatchTolerance, selector);
  });
};
