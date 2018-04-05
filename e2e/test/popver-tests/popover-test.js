const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const CLICK_ME_POPOVER_XPATH = '.col:nth-child(2)';
const CLICK_ME_POPOVER_CLICKABLE_XPATH = '.col:nth-child(2) .overlay-trigger';
const OVERLAY_POPOVER_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]//*[@class="overlay popover"]';
const TRIGERED_OVERLAY = '//*[@class="overlay-trigger overlay-trigger--active"]';
const HOVER_ME_POPOVER_XPATH = '//*[@class="col col-3"][1]//*[@class="overlay-trigger"]//*[contains(text(),"Hover me!")]';
const TRIGERED_OVERLAY_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]';

//test names
const CLICK_ME_POPOVER = 'click-popover';
const OVERLAY_POPOVER = 'overlay-popover';
const HOVER_ME_POPOVER = 'hover-popover';

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
    assert(takeScreenShotOfElementAndCompareWithRef(CLICK_ME_POPOVER_XPATH,
      {windowsTolerance: 6, defaultTolerance: 3, ignoreComparison: false}), //TODO: more than 20% tolerance
      'Click me popover is not similar to reference picture');
  });

  it('should check ' + OVERLAY_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(CLICK_ME_POPOVER_CLICKABLE_XPATH);
    assert(takeScreenShotOfElementAndCompareWithRef(OVERLAY_POPOVER_XPATH,
      {ffAndWindowsTolerance: 11, defaultTolerance: 9, ignoreComparison: false}),
      'Overlay popover for click me is not similar to reference picture');
  });

  it('should check ' + HOVER_ME_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.moveToElement(HOVER_ME_POPOVER_XPATH);
    browser.waitUntil(() =>
      browser.element(TRIGERED_OVERLAY_XPATH).isExisting(),
      15000,
      'does not show call button');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 2, ignoreComparison: false}),
      'Click me popover is not similar to reference picture');
  });

});
