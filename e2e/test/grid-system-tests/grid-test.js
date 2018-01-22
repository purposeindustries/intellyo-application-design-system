const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

describe('FEF grid tests', () => {

  it('Checks the the fef grid page title and browser compare visual regression', () => {
    browser.url('/grid');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 6, ignoreComparison: false}),
    'Whole FEF grid page screenshot compare to a reference picture');
  });
});
