const dateFormat = require('dateformat');
const slugify = require('slugify');
const path = require('path');

let basePathRef = '';
let basePathDiff = '';
let basePathScreen = '';

function getMisMatchPercentage(results) {
  return results[0].misMatchPercentage;
}

function setBasePath(dirPath) {
  basePathRef = dirPath + '/pics/reference';
  basePathDiff = dirPath + '/pics/diff';
  basePathScreen = dirPath + '/pics/screen';
}

module.exports.takeScreenshotAndGetWholePageCompareResult = (options) => {
  let misMatchTolerance;
  let ignoreComparisonValue = '';

  if (!options.testDirPath) {
    console.log('missing argument. The testDirPath is neccessary for visual regression pics (default "__dirname")');
    return false;
  }

  setBasePath(options.testDirPath);

  misMatchTolerance = options.defaultTolerance;

  if (options.windowsTolerance
    && browser.desiredCapabilities.platform
    && browser.desiredCapabilities.platform.includes('Windows')) {
    misMatchTolerance = options.windowsTolerance;
  } if (options.firefoxTolerance
    && browser.desiredCapabilities.browserName
    && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.firefoxTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  const misMatchPercentage = getMisMatchPercentage(browser.checkViewport({ ignoreComparison: ignoreComparisonValue }));
  const isTestPassed = (misMatchPercentage <= misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  console.log('misMatchTolerance: ' + misMatchTolerance
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

  if (options.windowsTolerance
    && browser.desiredCapabilities.platform
    && browser.desiredCapabilities.platform.includes('Windows')) {
    misMatchTolerance = options.windowsTolerance;
  }
  if (options.firefoxTolerance
    && browser.desiredCapabilities.browserName
    && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.firefoxTolerance;
  } else {
    misMatchTolerance = options.defaultTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  const misMatchPercentage = getMisMatchPercentage(browser.checkElement(elementSelector, { ignoreComparison: ignoreComparisonValue }));
  const isTestPassed = (misMatchPercentage < misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  console.log('misMatchTolerance: ' + misMatchTolerance
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
