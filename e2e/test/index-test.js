const visualRegression = require('./visual-regression');
const assert = require('assert');

const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

describe('FEF index tests', () => {

  before(() => {
    if (!process.env.CI || !process.env.TEST_PROVIDER === 'sauce') {
      browser.windowHandleSize({width: 1300, height: 768});
    }
  });

  it('Checks the the fef index page title and browser compare visual regression', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult(3));
  });
});
