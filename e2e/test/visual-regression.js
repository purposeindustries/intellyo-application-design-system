function getExactSameImage(results) {
  return results[0].isWithinMisMatchTolerance;
}

module.exports.takeRefScreenshot = function () {
  browser.url('/');
  browser.checkViewport();
};

module.exports.takeScreenshotAndGetCompareResult = function (browser) {
  browser.url('/');
  return getExactSameImage(browser.checkViewport());
};
