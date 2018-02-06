const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

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
    assert(takeScreenShotOfElement(DANGER_ZONE_SELECTOR,
      {firefoxTolerance: 4.5, defaultTolerance: 3, ignoreComparison: false}),
       'Added tags input is not similar to the reference');
  });

  it.only('should check the section ' + DANGER_ZONE_BUTTON_MOUSEOVER, () => {
    browser.url('/sections');
    const isItSauce = (process.env.E2EPROFILE || '').includes('sauce');
    assert(browser.isExisting(DANGER_ZONE_DELETE_BUTTON), 'Danger zone is not existing in the DOM');
    browser.moveToElement(DANGER_ZONE_DELETE_BUTTON);
    assert(takeScreenShotOfElementAndCompareWithRef(DANGER_ZONE_DELETE_BUTTON,
      {windowsTolerance: 11, defaultTolerance: isItSauce ? 1 : 3.5, ignoreComparison: !isItSauce}),
       'Added tags input is not similar to the reference');
  });
});
