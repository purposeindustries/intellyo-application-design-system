const assert = require('assert');
const SAVE_BUTTON = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';

describe('FEF basic tests', function () {
  it('should open  with proper title', function () {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
  });
});

describe('FEF button tests', function () {
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
