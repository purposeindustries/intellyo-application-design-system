const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const ALL_TYPOGRAPHY_XPATH = '//*[@class="page-typography"]//ul';

//test names
const ALL_TYPOGRAPHY = 'All-typography';

describe('FEF typography tests', () => {

  it('Checks the the fef grid page title and browser compare visual regression', () => {
    browser.url('/typography');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
    'Whole FEF typography page screenshot compare to a reference picture');
  });

  it('should check the ' + ALL_TYPOGRAPHY, () => {
    browser.url('/typography');
    assert(browser.isExisting(ALL_TYPOGRAPHY_XPATH), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElement(ALL_TYPOGRAPHY_XPATH,
      {firefoxTolerance: 5, defaultTolerance: 3, ignoreComparison: false}),
       '"Yeah dropdown" is not similar to the reference');
  });

});
