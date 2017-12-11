const assert = require('assert');
const visualRegression = require('./visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

const SAVE_BUTTON_SELECTOR = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';

const YEAH_DROPDOWN_XPATH = '//*[@class="dropdown"][1]//*[@class="dropdown-inner-wrap dropdown-inner-wrap--split"]';
const YEAH_DROPDOWN_NAME = 'Yeah-button';

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', function () {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult(1));
  });

  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH));
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH, 3));
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
