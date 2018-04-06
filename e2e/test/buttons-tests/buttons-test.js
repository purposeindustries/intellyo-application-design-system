const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const SAVE_BUTTON_SELECTOR = 'span=Save';
const YEAH_DROPDOWN_SELECTOR = '.dropdowns .dropdown:first-child';
const SAVE_BUTTON_SELECTOR_LOADING = '.loading-buttons .button:nth-child(1)';

//test names
const YEAH_DROPDOWN_NAME = 'Yeah-button';
const YEAH_DROPDOWN_MOUSEOVER_NAME = 'Yeah-button-mouseover';
const SAVE_BUTTON_NAME = 'Save-button';
const SAVE_BUTTON_LOADING_NAME = 'Save-button-loading';

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', () => {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF buttons page screenshot compare to a reference picture');
  });


  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_SELECTOR), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(YEAH_DROPDOWN_SELECTOR,
      {localTolerance: 6, ffAndWindowsTolerance: 7, windowsTolerance: 6, defaultTolerance: 1, ignoreComparison: false}),
       '"Yeah dropdown" is not similar to the reference');
  });

  it('should check the button with mouseover: ' + YEAH_DROPDOWN_MOUSEOVER_NAME, () => {
    browser.url('/buttons');
    browser.moveToElement(YEAH_DROPDOWN_SELECTOR);
    assert(browser.isExisting(YEAH_DROPDOWN_SELECTOR), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef('.dropdown',
      {defaultTolerance: 6}),
      '"Yeah dropdown" with mouseover is not similar to the reference');
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR_LOADING).scroll();
    assert(browser.isExisting(SAVE_BUTTON_SELECTOR_LOADING), 'Save button is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(SAVE_BUTTON_SELECTOR_LOADING,
      {defaultTolerance: 1, ignoreComparison: true}),
       'Save button is not similar to the reference before click');
    browser.click(SAVE_BUTTON_SELECTOR_LOADING);

    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
    assert(takeScreenShotOfElementAndCompareWithRef(SAVE_BUTTON_SELECTOR_LOADING,
      {defaultTolerance: 1, ignoreComparison: true}),
       'Save button is not similar to the reference after click');
  });

  it('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Save button is not existing in the DOM before click for loading button');
    browser.click(SAVE_BUTTON_SELECTOR);
    assert(takeScreenShotOfElementAndCompareWithRef(SAVE_BUTTON_SELECTOR_LOADING,
      {ffAndWindowsTolerance: -1, windowsTolerance: 5, defaultTolerance: 4, ignoreComparison: false}),
      'Loading button is not similar to the reference after click loading on windows');
    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
  });
});
