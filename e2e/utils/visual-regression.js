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

module.exports.takeScreenShotOfElement = (elementSelector, misMatchTolerance) => {
  const misMatchPercentage = getMisMatchPercentage(browser.checkElement(elementSelector));
  const isTestPassed = (misMatchPercentage <= misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  console.log('misMatchTolerance: ' + misMatchTolerance
  + '\nmisMatchPercentage: ' + misMatchPercentage
  + '\nelementSelector: ' + elementSelector);

  return isTestPassed;
};
