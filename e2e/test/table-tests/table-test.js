const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const REGULAR_TABLE_SELECTOR = '.card-body .row:nth-child(1) .col:nth-child(1)';
const STICKY_TABLE_SELECTOR = '.card-body .row:nth-child(1) .col:nth-child(2)';
const EXPANDER_NO1_SELECTOR = '.card-body .row:nth-child(1) .col:nth-child(2) .table--row:nth-child(1) .icon';
const NO1_STICKY_LIST_ELEMENT_SELECTOR = '.card-body .row:nth-child(1) .col:nth-child(2) .table--rows .table--row:nth-child(1)';

//test names
const REGULAR_TABLE = 'regular-table';
const STICKY_TABLE = 'sticky-table';
const STICKY_TABLE_EXPANDING = 'sticky-table-expanding';

describe('FEF table tests', () => {

  it('Checks the the fef table page title and browser compare visual regression', () => {
    browser.url('/tables');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 7, ignoreComparison: false}),
      'Whole FEF popover page screenshot not similar to other configurations');
  });

  it('should check ' + REGULAR_TABLE, () => {
    browser.url('/tables');
    assert(browser.isExisting(REGULAR_TABLE_SELECTOR),
    'Regular table element not found');
    assert(takeScreenShotOfElement(REGULAR_TABLE_SELECTOR,
      {ffAndWindowsTolerance: 8.5, firefoxTolerance: 5.5, windowsTolerance: 6.5, defaultTolerance: 3, ignoreComparison: false}),
      'Regular table is not similar to reference picture');
  });

  it('should check ' + STICKY_TABLE, () => {
    browser.url('/tables');
    browser.url('/tables');
    assert(browser.isExisting(STICKY_TABLE_SELECTOR),
    'Sticky table element not found');
    assert(takeScreenShotOfElement(STICKY_TABLE_SELECTOR,
      {ffAndWindowsTolerance: 8.9, firefoxTolerance: 5.7, windowsTolerance: 6.8, defaultTolerance: 3.5, ignoreComparison: false}),
      'Sticky table is not similar to reference picture');
  });

  it('should check ' + STICKY_TABLE_EXPANDING, () => {
    browser.url('/tables');
    assert(browser.isExisting(STICKY_TABLE_SELECTOR),
    'Sticky table element not found');
    assert(browser.isExisting(EXPANDER_NO1_SELECTOR),
    'Expander element not found');
    browser.click(EXPANDER_NO1_SELECTOR);
    assert(takeScreenShotOfElement(NO1_STICKY_LIST_ELEMENT_SELECTOR,
      {defaultTolerance: 5.5, ignoreComparison: false}),
      'Sticky table expanded first element is not similar to reference picture');
  });

});
