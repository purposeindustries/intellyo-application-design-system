const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

describe('FEF tooltip tests', () => {

  it('Checks the the fef tooltips page title and browser compare visual regression', () => {
    browser.url('/tooltip');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
      'Whole FEF tooltips page screenshot not similar to other configurations');
  });

});
