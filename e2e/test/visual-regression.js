function getExactSameImage(results) {
  return results[0].isWithinMisMatchTolerance;
}

module.exports.takeScreenshotAndGetWholePageCompareResult = () => {
  return getExactSameImage(browser.checkViewport());
};

module.exports.takeScreenShotOfElement = (elementSelector) => {
  return getExactSameImage(browser.checkElement(elementSelector));
};
