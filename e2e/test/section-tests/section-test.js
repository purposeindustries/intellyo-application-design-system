const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const DANGER_ZONE_SELECTOR = '.sections-page .row .box';
const DANGER_ZONE_DELETE_BUTTON = '.sections-page .row .box .button';


//test names
const DANGER_ZONE = 'danger-zone';
const DANGER_ZONE_BUTTON_MOUSEOVER = 'danger-zone-button-mouseover';

describe('FEF sections tests', () => {

  it('Checks the the fef modal page title and browser compare visual regression', () => {
    browser.url('/sections');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF popover page screenshot not similar to other configurations');
  });

  it('should check the section ' + DANGER_ZONE, () => {
    browser.url('/sections');
    assert(browser.isExisting(DANGER_ZONE_SELECTOR), 'Danger zone is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef(DANGER_ZONE_SELECTOR,
      {localTolerance: 4.9, firefoxTolerance: 4.7, defaultTolerance: 3, ignoreComparison: false, localIgnoreComparison: true}),
       'Danger zone is not similar to the reference');
  });

  it('should check the section ' + DANGER_ZONE_BUTTON_MOUSEOVER, () => {
    browser.url('/sections');
    assert(browser.isExisting(DANGER_ZONE_DELETE_BUTTON), 'Danger zone is not existing in the DOM');
    browser.moveToElement(DANGER_ZONE_DELETE_BUTTON);
    assert(takeScreenShotOfElementAndCompareWithRef(DANGER_ZONE_DELETE_BUTTON,
      {localTolerance: 3.5, windowsTolerance: 11.5, defaultTolerance: 1, localIgnoreComparison: true}),
       'Danger zone button with mouse over is not similar to the reference');
  });
});
