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
    assert(takeScreenshotAndGetWholePageCompareResult(10), 'Whole page screenshot assert');
  });

  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), 'Assert if ', YEAH_DROPDOWN_NAME, ' exists');
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH, 6), 'Assert screenshot of: ', YEAH_DROPDOWN_NAME);
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Assert if ', SAVE_BUTTON_NAME, ' exists');
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 17, true), 'Assert screenshot of: ', SAVE_BUTTON_NAME);

    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Assert if ', SAVE_BUTTON_NAME, ' exists');
    browser.click(SAVE_BUTTON_XPATH);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 17, true), 'Assert screenshot of: ', SAVE_BUTTON_NAME);
  });

  it('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Assert if ', SAVE_BUTTON_LOADING_NAME, ' exists');

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Assert if ', SAVE_BUTTON_LOADING_NAME, ' exists');
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 4), 'Assert screenshot of: ', SAVE_BUTTON_LOADING_NAME);
    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
  });

  it('should check the loading button', () => {
    browser.url('/buttons');

    $(SAVE_BUTTON_SELECTOR).scroll();

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Assert if ', SAVE_BUTTON_SELECTOR, ' exists');
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(browser.isExisting(LOADING_BUTTON), 'Assert if ', LOADING_BUTTON, ' exists');
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
  });
});
