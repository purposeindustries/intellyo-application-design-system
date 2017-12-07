function getExactSameImage(results) {
  return results[0].isWithinMisMatchTolerance;
}

module.exports.takeRefScreenshot = function () {
  browser.url('/');
  browser.checkViewport();
};

module.exports.takeScreenshotAndGetComapreResult = function (browser) {
  browser.url('/');
  return getExactSameImage(browser.checkViewport());
};
