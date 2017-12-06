const assert = require('assert');

function getExactSameImage(results) {
  return results[0].isExactSameImage;
}

describe.only('FEF basic tests', function () {
  it('takes reference pics', function () {
    browser.url('/');
    assert(getExactSameImage(browser.checkElement('.sidebar')));
  });
  it('check diff in menu', function () {
    browser.url('/');
    browser.click('a=Components');
    assert(getExactSameImage(browser.checkElement('.sidebar')));
  });
});
