const assert = require('assert');
const visualRegression = require('./visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

const SAVE_BUTTON = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';

const SAVE_BUTTON_NAME = 'Save Button';

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', function () {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult());
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON).scroll();
    assert(browser.isExisting(SAVE_BUTTON));
    assert(takeScreenShotOfElement(SAVE_BUTTON));
  });

  it('should check the loading button', () => {
    browser.url('/buttons');

    // $(SAVE_BUTTON).scroll();

    assert(browser.isExisting(SAVE_BUTTON));
    browser.click(SAVE_BUTTON);

    assert(browser.isExisting(LOADING_BUTTON));
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON).waitForExist(2200);
  });
});
