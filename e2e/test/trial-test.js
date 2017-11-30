const assert = require('assert');
const COMPONENTS_MENU = '=Components';
const BUTTONS_MENU = '=Buttons';
const SAVE_BUTTON = 'span=Save';
const LOADING_BUTTON = 'span=Loading...';

describe('FEF basic Tests', function () {

  it('should open  with proper title', function () {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
  });

  it('should check the loading button', function () {
    browser.url('/');

    assert(browser.isExisting(COMPONENTS_MENU));
    browser.click(COMPONENTS_MENU);

    assert(browser.isExisting(BUTTONS_MENU));
    browser.click(BUTTONS_MENU);

    $(SAVE_BUTTON).scroll();

    assert(browser.isExisting(SAVE_BUTTON));
    browser.click(SAVE_BUTTON);

    assert(browser.isExisting(LOADING_BUTTON));
    browser.click(LOADING_BUTTON);

    $(SAVE_BUTTON).waitForExist(2100);
  });
});
