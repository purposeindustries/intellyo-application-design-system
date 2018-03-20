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
  if (process.env.CIRCLE_ARTIFACTS) {
    basePathDiff = process.env.E2E_SCREENSHOTS + 'diff/';
    basePathScreen = process.env.E2E_SCREENSHOTS + 'screen/';
  } else {
    basePathDiff = dirPath + '/pics/diff/';
    basePathScreen = dirPath + '/pics/screen/';
  }
  basePathRef = dirPath + '/pics/reference/';
}

function createTestName() {
  const testName = browser.currentTestName;
  const browserVersion = browser.desiredCapabilities.version;
  const browserName = browser.desiredCapabilities.browserName;
  const platform = browser.desiredCapabilities.platform ? browser.desiredCapabilities.platform : '';
  const parent = browser.currentDescribe;
  const time = dateFormat(new Date(), 'hh-MM-ss-TT-yyyy-mm-dd');

  mkdirp.sync(basePathScreen + `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}`);

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
  if (options.localTolerance
  && !browser.driver.includes('sauce')) {
    misMatchTolerance = options.localTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  if (options.localIgnoreComparison
  && !browser.driver.includes('sauce')) {
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

  if (options.localTolerance
  && !browser.driver.includes('sauce')) {
    misMatchTolerance = options.localTolerance;
  }

  if (options.ffAndWindowsTolerance
  && browser.desiredCapabilities.browserName
  && browser.desiredCapabilities.browserName.includes('firefox')) {
    misMatchTolerance = options.ffAndWindowsTolerance;
  }

  if (options.ignoreComparison) {
    ignoreComparisonValue = 'colors';
  }

  if (options.localIgnoreComparison
  && !browser.driver.includes('sauce')) {
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
  return new Promise((resolve, reject) => {
    if (!isTestPassed) {
      mkdirp.sync(basePathDiff + `${slugify(browser.currentDescribe.toLowerCase())}/${slugify(browser.currentTestName.toLowerCase())}`);

      data
        .getDiffImage()
        .pack()
        .on('error', (err) => reject(err))
        .on('end', () => {
          resolve(isTestPassed);
        })
        .pipe(
          fs.createWriteStream(basePathDiff + createTestName())
        );

      testDebug('failing testName: ' + browser.currentTestName
      + '\nbrowser: ' + browser.desiredCapabilities.browserName
      + '\nplatform: ' + browser.desiredCapabilities.platform
      + '\nmisMatchTolerance: ' + misMatchTolerance
      + '\nmisMatchPercentage: ' + data.misMatchPercentage
      + '\nproblematic elementSelector: ' + selector);
      return;
    }
    resolve(isTestPassed);
  });
}
function writeDataIfNeeded(img, misMatchTolerance, selector) {
  return new Promise((resolve, reject) => {
    img.onComplete(function (data) {
      handleTakenScreenshot(data, misMatchTolerance, selector)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  });
}
module.exports.takeScreenShotOfElementAndCompareWithRef = (selector, options) => {
  return module.exports.takeScreenShotOfElementWithCrop(selector, options).value;
};

module.exports.takeScreenShotOfElementWithCrop = (selector, options) => {
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
  if (options.localTolerance
  && !browser.driver.includes('sauce')) {
    misMatchTolerance = options.localTolerance;
  }

  browser.saveElementScreenshot(selector, testPathAndName);
  const img = resemble(getRefPicName()).compareTo(testPathAndName);
  if (options.ignoreComparison === true) {
    img.ignoreColors();
  }

  if (options.localIgnoreComparison === true
  && !((process.env.E2EPROFILE || '') || '').includes('sauce')) {
    img.ignoreColors();
  }

  const promise = writeDataIfNeeded(img, misMatchTolerance, selector).then(result => {
    return {
      value: result
    };
  });
  return browser.waitUntil(() => {
    return promise;
  }, 10000);
};
