const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const SAVE_BUTTON_SELECTOR = 'span=Save';
const YEAH_DROPDOWN_XPATH = '.dropdown';
const SAVE_BUTTON_XPATH = '/html/body/div[1]/div/div/div/div/div[4]/div/div/div/button'; //TODO: create a normal xpath

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
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH,
      {defaultTolerance: 6, ignoreComparison: false}),
       '"Yeah dropdown" is not similar to the reference');
  });

  it('should check the button with mouseover: ' + YEAH_DROPDOWN_MOUSEOVER_NAME, () => {
    browser.url('/buttons');
    browser.moveToElement(YEAH_DROPDOWN_XPATH);
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef('.dropdown',
      {defaultTolerance: 6}),
      '"Yeah dropdown" with mouseover is not similar to the reference');
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Save button is not existing in the DOM');
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {defaultTolerance: 17.5, ignoreComparison: true}),
       'Save button is not similar to the reference before click');
    browser.click(SAVE_BUTTON_XPATH);

    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {defaultTolerance: 17.5, ignoreComparison: true}),
       'Save button is not similar to the reference after click');
  });

  it('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Save button is not existing in the DOM before click for loading button');
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {windowsTolerance: 8.8, defaultTolerance: 3, ignoreComparison: false}),
      'Loading button is not similar to the reference after click loading on windows');
    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
  });
});
