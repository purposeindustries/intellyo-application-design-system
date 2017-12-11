const assert = require('assert');
const visualRegression = require('./visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

const SAVE_BUTTON_SELECTOR = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';
const SAVE_BUTTON_NAME = 'Save-button';
const SAVE_BUTTON_LOADING_NAME = 'Save-button-loading';

const YEAH_DROPDOWN_XPATH = '//*[@class="dropdown"][1]//*[@class="dropdown-inner-wrap dropdown-inner-wrap--split"]';
const SAVE_BUTTON_XPATH = '/html/body/div[1]/div/div/div/div/div[4]/div/div/div/button';
const YEAH_DROPDOWN_NAME = 'Yeah-button';

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', () => {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult(3.6));
  });

  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH));
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH, 5));
  });

  it.skip('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH));
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 3));

    assert(browser.isExisting(SAVE_BUTTON_XPATH));
    browser.click(SAVE_BUTTON_XPATH);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);

    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 3));
  });

  it.skip('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH));

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR));
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH, 3));
  });

  it('should check the loading button', () => {
    browser.url('/buttons');

    $(SAVE_BUTTON_SELECTOR).scroll();

    assert(browser.isExisting(SAVE_BUTTON_SELECTOR));
    browser.click(SAVE_BUTTON_SELECTOR);

    assert(browser.isExisting(LOADING_BUTTON));
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON_SELECTOR).waitForExist(2200);
  });
});
