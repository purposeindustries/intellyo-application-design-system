const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const BASIC_BAR_CHART_XPATH = '//*[@class="row"][1]//*[@class="col col-6"][1]//*[@class="chart"][1]';
const SCATTER_CHART_XPATH = '//*[@class="row"][1]//*[@class="col col-6"][1]//*[@class="chart"][2]';

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

  it('should check the ' + BASIC_BAR_CHART, () => {
    browser.url('/charts');
    assert(browser.isExisting(BASIC_BAR_CHART_XPATH), 'Basic bar chart is not existing in the DOM before click for loading button');
    assert(takeScreenShotOfElement(BASIC_BAR_CHART_XPATH,
      {firefoxTolerance: 19, defaultTolerance: 15, ignoreComparison: false}),
      'Basic bar chart is not similar to the reference after click loading on windows');
  });

  it('should check the ' + SCATTER_CHART, () => {
    browser.url('/charts');
    assert(browser.isExisting(SCATTER_CHART_XPATH), 'Scatter chart is not existing in the DOM before click for loading button');
    assert(takeScreenShotOfElement(SCATTER_CHART_XPATH,
      {defaultTolerance: 5, ignoreComparison: false}),
      'Scatter chart is not similar to the reference after click loading on windows');
  });
});
