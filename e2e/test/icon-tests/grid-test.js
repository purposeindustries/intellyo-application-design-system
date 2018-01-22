const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

describe('FEF icons tests', () => {

  it('Checks the the fef grid page title and browser compare visual regression', () => {
    browser.url('/icons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
    'Whole FEF icons page screenshot compare to a reference picture');
  });
});
