const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const CLICK_ME_POPOVER_XPATH = '//*[@class="overlay-trigger"]//*[contains(text(),"Click me!")]';
const OVERLAY_POPOVER_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]//*[@class="overlay popover"]';
const TRIGERED_OVERLAY = '//*[@class="overlay-trigger overlay-trigger--active"]';

//test names
const CLICK_ME_POPOVER = 'click-popover';
const OVERLAY_POPOVER = 'overlay-popover';

describe('FEF popover tests', () => {

  it('Checks the the fef modal page title and browser compare visual regression', () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF popover page screenshot not similar to other configurations');
  });

  it('should check ' + CLICK_ME_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(browser.element(TRIGERED_OVERLAY).message
    === 'An element could not be located on the page using the given search parameters.',
    'Triggered overlay shows where its not allowed');
    assert(takeScreenShotOfElement(CLICK_ME_POPOVER_XPATH,
      {ffAndWindowsTolerance: 27, windowsTolerance: 19, defaultTolerance: 15.5, ignoreComparison: false}), //TODO: more than 20% tolerance
      'Click me popover is not similar to reference picture');
  });

  it('should check ' + OVERLAY_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(CLICK_ME_POPOVER_XPATH);
    assert(takeScreenShotOfElement(OVERLAY_POPOVER_XPATH,
      {defaultTolerance: 11, ignoreComparison: false}),
      'Overlay popover for click me is not similar to reference picture');
  });

});
