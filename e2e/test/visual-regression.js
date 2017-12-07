const assert = require('assert');

function getExactSameImage(results) {
  return results[0].isWithinMisMatchTolerance;
}

describe.only('Visual regression test', function () {
  before(function () {
    this.timeout(20000);
    browser.url('/');
    browser.checkViewport();
  });
  it('Check if view is the same', function () {
    this.timeout(20000);
    browser.url('/');
    assert(getExactSameImage(browser.checkViewport()));
  });
});
