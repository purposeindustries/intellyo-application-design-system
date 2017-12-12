const visualRegression = require('./visual-regression');
const assert = require('assert');

const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

describe('FEF index tests', () => {

  it.skip('Checks the the fef index page title and browser compare visual regression', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult(3));
  });
});