const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const TOOLTIP_RIGHT_SELECTOR = '.card-body .col:nth-child(2) .overlay-trigger .UserAvatar';
const WHOLE_TOOLTIP_DIV_SELECTOR = '.card-body';

//test names
const TOOLTIP_RIGHT = 'tooltip-right';


describe('FEF tooltip tests', () => {

  it('Checks the the fef tooltips page title and browser compare visual regression', () => {
    browser.url('/tooltip');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
      'Whole FEF tooltips page screenshot not similar to other configurations');
  });

  it('should check ' + TOOLTIP_RIGHT, () => {
    browser.url('/tooltip');
    assert(browser.isExisting(TOOLTIP_RIGHT_SELECTOR), 'Input selector is not existing in the DOM');
    browser.moveToElement(TOOLTIP_RIGHT_SELECTOR);
    browser.waitForExist('.overlay-trigger--active .user-avatar');
    assert(takeScreenShotOfElementAndCompareWithRef(WHOLE_TOOLTIP_DIV_SELECTOR, {localTolerance: 5.8, ffAndWindowsTolerance: 2.7, defaultTolerance: 2, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });
});
