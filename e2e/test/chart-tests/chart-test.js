const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const BASIC_BAR_CHART_SELECTOR = '.col:nth-child(1) .chart:nth-child(1) .card';
const SCATTER_CHART_SELECTOR = '.col:nth-child(1) .chart:nth-child(2)';

//test names
const BASIC_BAR_CHART = 'Basic-bar-chart';
const SCATTER_CHART = 'Scatter-chart';

describe('FEF charts tests', () => {

  it('Checks the the fef charts page title and browser compare visual regression', () => {
    browser.url('/charts');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 6, ignoreComparison: false}),
      'Whole FEF charts page screenshot not similar to other configurations');
  });

  it.skip('should check the ' + BASIC_BAR_CHART, () => {
    browser.url('/charts');
    assert(browser.isExisting(BASIC_BAR_CHART_SELECTOR), 'Basic bar chart is not existing in the DOM before click for loading button');
    assert(takeScreenShotOfElementAndCompareWithRef(BASIC_BAR_CHART_SELECTOR,
      {defaultTolerance: 1, ignoreComparison: false}),
      'Basic bar chart is not similar to the reference after click loading on windows');
  });

  it('should check the ' + SCATTER_CHART, () => {
    browser.url('/charts');
    assert(browser.isExisting(SCATTER_CHART_SELECTOR), 'Scatter chart is not existing in the DOM before click for loading button');
    assert(takeScreenShotOfElementAndCompareWithRef(SCATTER_CHART_SELECTOR,
      {defaultTolerance: 9, ignoreComparison: false}),
      'Scatter chart is not similar to the reference after click loading on windows');
  });
});
