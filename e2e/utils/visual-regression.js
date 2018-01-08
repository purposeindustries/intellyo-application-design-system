const dateFormat = require('dateformat');
const slugify = require('slugify');
const path = require('path');

function getMisMatchPercentage(results) {
  return results[0].misMatchPercentage;
}

module.exports.takeScreenshotAndGetWholePageCompareResult = (misMatchTolerance) => {
  const misMatchPercentage = getMisMatchPercentage(browser.checkViewport());
  const isTestPassed = (misMatchPercentage <= misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  console.log('misMatchTolerance: ' + misMatchTolerance
  + '\nmisMatchPercentage: ' + misMatchPercentage);

  return isTestPassed;
};

module.exports.takeScreenShotOfElement = (elementSelector, misMatchTolerance, ignoreComparison) => {
  let ignoreComparisonValue = '';
  if (ignoreComparison === true) {
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

module.exports.getScreenshotName = (basePath, isDefaultBrowser) => {
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

    return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${slugify(time.toLowerCase())}_${type}_${platform.toLowerCase()}_${type}_${browserName.toLowerCase()}_v${browserVersion}_${browserWidth}x${browserHeight}.png`);
  };
};


module.exports.getRefPicName = (basePath) => {
  return function (context) {
    const testName = context.test.title;
    const parent = context.test.parent;
    const lastWordOfTestName = testName.split(' ').pop();

    if (typeof context.test.parent !== undefined && context.test.title.includes('browser compare visual regression')) {
      return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/whole_page_reference.png`);
    }
    return path.join(basePath, `${slugify(parent.toLowerCase())}/${slugify(testName.toLowerCase())}/${lastWordOfTestName.toLowerCase()}_reference_pic.png`);
  };
};
