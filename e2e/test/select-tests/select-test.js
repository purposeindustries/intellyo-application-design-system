const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const SELECT_HELLO_SELECTOR = '.dropdown:nth-child(2)';
const SELECT_HELLO_OPENED_XPATH = '.dropdown--open';
const SELECT_HELLO_OPENED_DROPDOWN_XPATH = '.dropdown--open .dropdown-items';

//test names
const SELECT_HELLO = 'select-hello';
const SELECT_HELLO_OPENED = 'select-hello-opened';
const SELECT_HELLO_CLOSED = 'select-hello-closed';

describe('FEF select tests', () => {

  it('Checks the the fef select page title and browser compare visual regression', () => {
    browser.url('/select');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF select page screenshot compare to a reference picture');
  });

  it('should check the input ' + SELECT_HELLO, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(SELECT_HELLO_SELECTOR,
      {localTolerance: 6, firefoxTolerance: 5.5, ffAndWindowsTolerance: 7.8, windowsTolerance: 7, defaultTolerance: 1, ignoreComparison: false}),
       '"Hello" select is not similar to the reference');
  });

  it('should check the input ' + SELECT_HELLO_OPENED, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    browser.click(SELECT_HELLO_SELECTOR);
    assert(browser.isExisting(SELECT_HELLO_OPENED_XPATH), 'Select "Hello-opened" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(SELECT_HELLO_OPENED_DROPDOWN_XPATH,
      {windowsTolerance: 9, defaultTolerance: 3, ignoreComparison: false}),
       '"Hello" select opened is not similar to the reference');
  });

  it('should check the input ' + SELECT_HELLO_CLOSED, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    browser.click(SELECT_HELLO_SELECTOR);
    browser.click(SELECT_HELLO_OPENED_XPATH);
    assert(takeScreenShotOfElementAndCompareWithRef(SELECT_HELLO_SELECTOR,
      {ffAndWindowsTolerance: 7.5, defaultTolerance: 6, ignoreComparison: false}),
       '"Hello" select closed is not similar to the reference');
  });
});
