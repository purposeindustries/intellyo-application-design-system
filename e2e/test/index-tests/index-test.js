const visualRegression = require('../../utils/visual-regression');
const assert = require('assert');

const { takeScreenshotAndGetWholePageCompareResult } = visualRegression;

let testName = '';

beforeEach(function () {
  testName = this.currentTest.title;
});

describe('FEF index tests', () => {

  it('Checks the the fef index page title and browser compare visual regression', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false, testDirPath: __dirname, testName: testName}), 'Whole FEF index page screenshot compare to a reference picture');
  });
});
