function getMisMatchPercentage(results) {
  return results[0].misMatchPercentage;
}

module.exports.takeScreenshotAndGetWholePageCompareResult = (misMatchTolerance) => {
  return ((getMisMatchPercentage(browser.checkViewport()) <= misMatchTolerance) || false);
};

module.exports.takeScreenShotOfElement = (elementSelector, misMatchTolerance) => {
  return ((getMisMatchPercentage(browser.checkElement(elementSelector)) <= misMatchTolerance) || false);
};
