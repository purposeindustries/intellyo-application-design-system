const visualRegression = require('./visual-regression');

const { takeScreenshotAndGetCompareResult } = visualRegression;

const assert = require('assert');
const SAVE_BUTTON = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';

describe('FEF basic tests', function () {

  it('Checks the the fef main page', function () {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetCompareResult(browser));
  });
});

describe('FEF load button tests', function () {
  it('should check the loading button', function () {
    browser.url('/buttons');

    $(SAVE_BUTTON).scroll();

    assert(browser.isExisting(SAVE_BUTTON));
    browser.click(SAVE_BUTTON);

    assert(browser.isExisting(LOADING_BUTTON));
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON).waitForExist(2200);
  });
});
