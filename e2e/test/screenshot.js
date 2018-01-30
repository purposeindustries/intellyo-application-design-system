describe('screenshot', () => {
  it('dropdown', () => {
    browser.url('/buttons');

    browser.saveElementScreenshot('.dropdown', './dropdown.png');
  });
});