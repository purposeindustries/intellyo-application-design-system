const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const TAGS_INPUT_WHOLE_ORIG_XPATH = '.tagsinput--size-normal';
const TAGS_INPUT_CLICKABLE = '//*[@class="button tagsinput-add-tag button--normal"]';
const TAGS_INPUT_WHOLE_CLICKED_XPATH = '.react-tagsinput--focused';
const TAGS_INPUT_INPUT = '//*[@class="react-tagsinput-input tagsinput-input"]';
const HAMBURGER_TAG_SELECTOR = '.toggleable-tags .button:nth-child(1)';

//test names
const TEST_NAME_TAGS_INPUT_NAME = 'tags-input';
const TEST_NAME_TAGS_INPUT_MOUSE_OVER = 'tags-input-mouse-over';
const TEST_NAME_TAGS_INPUT_CLICK = 'tags-input-click';
const TEST_NAME_TAGS_ADD_INPUT = 'tags-input-add-input';
const TEST_NAME_TAGS_ADD_INPUT_CLICK = 'tags-input-add-input-click';
const HAMBURGER_TAG = 'hamburger-tag';
const HAMBURGER_CLICK_TAG = 'hamburger-click-tag';
const HAMBURGER_MOUSEOVER_TAG = 'hamburger-mouseover-tag';

describe('FEF tags input tests', () => {

  it('Checks the the fef tags input page title and browser compare visual regression', () => {
    browser.url('/tagsinput');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF tags input page screenshot compare to a reference picture');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_NAME, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {localTolerance: 3, defaultTolerance: 1, ignoreComparison: false}),
       'Tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_MOUSE_OVER, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before mouse over');
    browser.moveToElement(TAGS_INPUT_CLICKABLE, 0, 0);
    assert(takeScreenShotOfElementAndCompareWithRef(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {localTolerance: 3.1, defaultTolerance: 2.1, ignoreComparison: false}),
       'Mouse over tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before click');
    browser.click(TAGS_INPUT_CLICKABLE);
    assert(takeScreenShotOfElementAndCompareWithRef(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {localTolerance: 3, defaultTolerance: 1, ignoreComparison: false}),
       'Clicked tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, 'foobar\n');
    assert(takeScreenShotOfElementAndCompareWithRef(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {localTolerance: 5, defaultTolerance: 1, ignoreComparison: false}),
       'Added tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding and clicking');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, 'foobar\n');
    browser.click('span=pizza');
    assert(takeScreenShotOfElementAndCompareWithRef(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {localTolerance: 5, defaultTolerance: 1, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');
  });


  it('should check the input: ' + HAMBURGER_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    assert(takeScreenShotOfElementAndCompareWithRef(HAMBURGER_TAG_SELECTOR,
      {localTolerance: 10, windowsTolerance: 18, defaultTolerance: 1, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');

  });

  it('should check the input: ' + HAMBURGER_MOUSEOVER_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    browser.moveToElement(HAMBURGER_TAG_SELECTOR);
    assert(takeScreenShotOfElementAndCompareWithRef(HAMBURGER_TAG_SELECTOR,
      {localTolerance: 10, windowsTolerance: 16, defaultTolerance: 2, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');

  });

  it('should check the input: ' + HAMBURGER_CLICK_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    browser.click(HAMBURGER_TAG_SELECTOR);
    assert(takeScreenShotOfElementAndCompareWithRef(HAMBURGER_TAG_SELECTOR,
      {localTolerance: 5, windowsTolerance: 16, defaultTolerance: 1, localIgnoreComparison: true }),
       'Added and clicked tags input is not similar to the reference');

  });
});
