const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const BASIC_INFO_ACCORDION_SELECTOR = '.card:nth-child(1) .accordion-item:nth-child(1)';
const BASIC_INFO_ACCORDION_CHILDREN_SELECTOR = '.card:nth-child(1) .accordion-item:nth-child(1) .accordion-item-children';
const BASIC_INFO_ACCORDION_OPEN_SELECTOR = '.accordion-item--open';
const BASIC_INFO_ACCORDION_INNER_WRAP_SELECTOR = '.card:nth-child(1) .accordion-item accordion-item--open:nth-child(1) .accordion-item-children-inner-wrapper';

//test names
const BASIC_INFO_ACCORDION = 'basic-info-accordion';
const BASIC_INFO_ACCORDION_OPEN = 'basic-info-accordion-open';

describe('FEF accordions tests', () => {

  it('Checks the the fef accordions page title and browser compare visual regression', () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF accordions page screenshot not similar to other configurations');
  });

  it('should check ' + BASIC_INFO_ACCORDION, () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(browser.element(BASIC_INFO_ACCORDION_INNER_WRAP_SELECTOR).message
     === 'An element could not be located on the page using the given search parameters.');
    assert(browser.getAttribute(BASIC_INFO_ACCORDION_CHILDREN_SELECTOR, 'style') === 'height: 0px; opacity: 0;', 'Accordion children height and/or opacity note 0');
    assert(takeScreenShotOfElementAndCompareWithRef(BASIC_INFO_ACCORDION_SELECTOR,
      {defaultTolerance: 5, ignoreComparison: false}),
      'Basic accordion info is not similar to reference picture');
  });

  it('should check ' + BASIC_INFO_ACCORDION_OPEN, () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INFO_ACCORDION_SELECTOR);
    browser.waitForExist(BASIC_INFO_ACCORDION_OPEN_SELECTOR);
    assert(takeScreenShotOfElementAndCompareWithRef(BASIC_INFO_ACCORDION_OPEN_SELECTOR,
      {windowsTolerance: 9, defaultTolerance: 2.5, ignoreComparison: false}),
      'Basic accordion info in opened state is not similar to reference picture');
  });

});
