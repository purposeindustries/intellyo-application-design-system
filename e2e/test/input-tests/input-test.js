const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

const BASIC_INPUT = '//*[@placeholder="Basic"]';

const BASIC_INPUT_NAME = 'Basic-input';
const BASIC_INPUT_CLICKED_NAME = 'Basic-input-clicked';
const BASIC_INPUT_ADDED_TEXT_NAME = 'Basic-input-added-text';

describe('FEF tags input tests', () => {

  it('Checks the the fef inputs page title and browser compare visual regression', () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 12, ignoreComparison: false, testDirPath: __dirname}),
      'Whole FEF input page screenshot not similar to other configurations');
  });

  it('should check: ' + BASIC_INPUT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    const misMatchTolerance = (browser.desiredCapabilities.browserName === 'firefox') ? 11 : 4;//TODO : Why firefox problematic?
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {defaultTolerance: misMatchTolerance, ignoreComparison: false, testDirPath: __dirname}),
      'Basic input is not similar to reference picture');
  });

  it('should check: ' + BASIC_INPUT_CLICKED_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    const misMatchTolerance = (browser.desiredCapabilities.browserName === 'firefox') ? 12 : 9.2;//TODO : Why firefox problematic?
    browser.click(BASIC_INPUT);
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {defaultTolerance: misMatchTolerance, ignoreComparison: false, testDirPath: __dirname}),
      'Basic input is not similar to reference picture');
  });

  it('should check: ' + BASIC_INPUT_ADDED_TEXT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    const misMatchTolerance = (browser.desiredCapabilities.browserName === 'firefox') ? 14 : 11;//TODO : Why firefox problematic?
    browser.click(BASIC_INPUT);
    browser.setValue(BASIC_INPUT, `${'foobar'}\n`);
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {defaultTolerance: misMatchTolerance, ignoreComparison: false, testDirPath: __dirname}),
      'Basic input is not similar to reference picture');
  });

});
