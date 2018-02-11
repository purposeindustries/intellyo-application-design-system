const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const INPUT_SELECTOR = 'input[type=file]';
const UPDLOAD_PICTURE_SELECTOR = '.card-body:nth-child(2) .user-avatar';
const MEDIUM_AVATAR_SELECTOR = '.avatar-wrapper:nth-child(2) .user-avatar--medium';
const SECOND_AVATAR_WRAPPER = '.avatar-wrapper:nth-child(2)';

//test names
const UPLOAD_FILE = 'upload-file';
const MEDIUM_AVATAR = 'medium-avatar';

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
    assert(takeScreenShotOfElement(UPDLOAD_PICTURE_SELECTOR, {defaultTolerance: 11, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });

  it('should check ' + MEDIUM_AVATAR, () => {
    browser.url('/avatars');
    assert(browser.isExisting(MEDIUM_AVATAR_SELECTOR), 'Input selector is not existing in the DOM');
    browser.moveToElement(MEDIUM_AVATAR_SELECTOR);
    browser.waitForExist('.overlay-trigger--active');
    assert(takeScreenShotOfElementAndCompareWithRef(SECOND_AVATAR_WRAPPER, {localTolerance: 14, firefoxTolerance: 3.5, defaultTolerance: 2, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });

});
