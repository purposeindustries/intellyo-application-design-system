const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

//Selectors/xpaths
const HOVER_ME_POPOVER_XPATH = '//*[@class="col col-3"][1]//*[@class="overlay-trigger"]//*[contains(text(),"Hover me!")]';
const TRIGERED_OVERLAY_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]';

//test names
const HOVER_ME_POPOVER = 'hover-popover';

describe('FEF popover tests', () => {

  it('should check ' + HOVER_ME_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.moveToElement(HOVER_ME_POPOVER_XPATH);
    browser.waitUntil(() =>
      browser.element(TRIGERED_OVERLAY_XPATH).isExisting(),
      15000,
      'does not show call button');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 2, ignoreComparison: false}), //TODO: more than 20% tolerance
      'Click me popover is not similar to reference picture');
  });

});
