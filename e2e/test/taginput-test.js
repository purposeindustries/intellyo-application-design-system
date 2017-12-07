const assert = require('assert');

function getExactSameImage(results) {
  return results[0].isExactSameImage;
}

describe.only('visual regression', function () {
  it('takes reference pics and check it', function () {
    this.timeout(20000);
    browser.url('/');
    browser.checkElement('.sidebar');
    browser.click('a=Components');
    assert(getExactSameImage(browser.checkElement('.sidebar')));
  });
});
