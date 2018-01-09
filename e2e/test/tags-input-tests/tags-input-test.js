const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const TAGS_INPUT_WHOLE_ORIG_XPATH = '//*[@class="tagsinput tagsinput--size-normal"]';
const TAGS_INPUT_CLICKABLE = '//*[@class="button tagsinput-add-tag button--normal"]';
const TAGS_INPUT_WHOLE_CLICKED_XPATH = '//*[@class="tagsinput tagsinput--size-normal react-tagsinput--focused"]';
const TAGS_INPUT_INPUT = '//*[@class="react-tagsinput-input tagsinput-input"]';

//test names
const TEST_NAME_TAGS_INPUT_NAME = 'tags-input';
const TEST_NAME_TAGS_INPUT_MOUSE_OVER = 'tags-input-mouse-over';
const TEST_NAME_TAGS_INPUT_CLICK = 'tags-input-click';
const TEST_NAME_TAGS_ADD_INPUT = 'tags-input-add-input';
const TEST_NAME_TAGS_ADD_INPUT_CLICK = 'tags-input-add-input-click';

describe('FEF tags input tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', () => {
    browser.url('/tagsinput');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5, ignoreComparison: false, testDirPath: __dirname}), 'Whole FEF tags input page screenshot compare to a reference picture');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_NAME, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM');
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {defaultTolerance: 10, ignoreComparison: false, testDirPath: __dirname}),
       'Tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_MOUSE_OVER, () => {
    if (!browser.desiredCapabilities.browserName.includes('firefox')) { //TODO: We should find solutions for moveToObject and other cross-browser problems
      browser.url('/tagsinput');
      assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before mouse over');
      browser.moveToObject(TAGS_INPUT_CLICKABLE, 0, 0);
      assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
        {defaultTolerance: 10, ignoreComparison: false, testDirPath: __dirname}),
         'Mouse over tags input is not similar to the reference');
    }
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before click');
    browser.click(TAGS_INPUT_CLICKABLE);
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {defaultTolerance: 11, ignoreComparison: false, testDirPath: __dirname}),
       'Clicked tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, `${'foobar'}\n`);
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {defaultTolerance: 11, ignoreComparison: false, testDirPath: __dirname}),
       'Added tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding and clicking');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, `${'foobar'}\n`);
    browser.click('span=hamburger');
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {defaultTolerance: 11, ignoreComparison: false, testDirPath: __dirname}),
       'Added and clicked tags input is not similar to the reference');

  });
});
