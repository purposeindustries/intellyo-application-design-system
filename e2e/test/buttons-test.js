const assert = require('assert');
const visualRegression = require('../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const SAVE_BUTTON_SELECTOR = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';
const YEAH_DROPDOWN_XPATH = '//*[@class="dropdown"][1]//*[@class="dropdown-inner-wrap dropdown-inner-wrap--split"]';
const SAVE_BUTTON_XPATH = '/html/body/div[1]/div/div/div/div/div[4]/div/div/div/button'; //TODO: create a normal xpath

//test names
const YEAH_DROPDOWN_NAME = 'Yeah-button';
const SAVE_BUTTON_NAME = 'Save-button';
const SAVE_BUTTON_LOADING_NAME = 'Save-button-loading';

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', () => {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult(10), 'Whole FEF buttons page screenshot compare to a reference picture');
  });

  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), '"Yeah dropdown" is not existing in the DOM.');
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH, 6), '"Yeah dropdown" is not similar to the reference');
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Save button is not existing in the DOM');
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 17, true), ' 1st check if save button is similar to the reference');

    assert(browser.isExisting(SAVE_BUTTON_XPATH), '2nd check if save button existing in the DOM');
    browser.click(SAVE_BUTTON_XPATH);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 17, true) + '2nd check if save button is similar to the reference');
  });

  it('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Check if save button existing in the DOM for Loading button test');
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(takeScreenShotOfElement(LOADING_BUTTON, 4), 'Check if loading button is similar to the reference');
    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
  });

  it('should check the loading button', () => {
    browser.url('/buttons');

    $(SAVE_BUTTON_SELECTOR).scroll();

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Check if save button existing in the DOM for Loading button test');
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(browser.isExisting(LOADING_BUTTON), 'Check if loading button appears in the DOM after click save button');
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
  });
});
