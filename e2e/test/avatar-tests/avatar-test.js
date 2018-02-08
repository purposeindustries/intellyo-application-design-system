const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const INPUT_SELECTOR = 'input[type=file]';
const FIRST_AVATAR_SELECTOR = '.card-body:nth-child(2) .user-avatar';

//test names
const UPLOAD_FILE = 'upload-file';

//pic path
const PIC_PATH = './e2e/utils/pics/IMG_0090.jpg';

describe('FEF avatars tests', () => {

  it('Checks the the fef tooltips page title and browser compare visual regression', () => {
    browser.url('/avatars');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3.5, ignoreComparison: false}),
      'Whole FEF avatars page screenshot not similar to other configurations');
  });

  it('should check avatar ' + UPLOAD_FILE, () => {
    browser.url('/avatars');
    assert(browser.isExisting(INPUT_SELECTOR), 'Input selector is not existing in the DOM');
    browser.chooseFile(INPUT_SELECTOR, PIC_PATH);
    assert(takeScreenShotOfElement(FIRST_AVATAR_SELECTOR, {defaultTolerance: 11, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });

});
