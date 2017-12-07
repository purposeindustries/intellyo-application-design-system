const assert = require('assert');

function getExactSameImage(results) {
  console.log(results);
}

describe.only('visual regression', function () {
  it('takes reference pics and check it', function () {
    this.timeout(20000);
    browser.url('/');
    browser.checkElement('.sidebar');
    browser.click('a=Components');
    getExactSameImage(browser.checkElement('.sidebar'));
  });
});
