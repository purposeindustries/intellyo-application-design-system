const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

const BASIC_INPUT = '//*[@placeholder="Basic"]';

const BASIC_INPUT_NAME = 'Basic-input';
const BASIC_INPUT_CLICKED_NAME = 'Basic-input-clicked';
const BASIC_INPUT_ADDED_TEXT_NAME = 'Basic-input-added-text';

describe('FEF input tests', () => {

  it('Checks the the fef inputs page title and browser compare visual regression', () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 14, ignoreComparison: false}),
      'Whole FEF input page screenshot not similar to other configurations');
  });

  it('should check ' + BASIC_INPUT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 11.5, defaultTolerance: 4, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input is not similar to reference picture');
  });

  it('should check ' + BASIC_INPUT_CLICKED_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INPUT);
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 12, defaultTolerance: 9.2, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input is not similar to reference picture');
  });

  it('should check ' + BASIC_INPUT_ADDED_TEXT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INPUT);
    browser.setValue(BASIC_INPUT, `${'foobar'}\n`);
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 14, defaultTolerance: 11, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input is not similar to reference picture');
  });

});
