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
  const isTestPassed = (misMatchPercentage <= misMatchTolerance) || false;
  if (isTestPassed) {
    return isTestPassed;
  }
  console.log('misMatchTolerance: ' + misMatchTolerance
  + '\nmisMatchPercentage: ' + misMatchPercentage
  + '\nproblematic elementSelector: ' + elementSelector);

  return isTestPassed;
};
