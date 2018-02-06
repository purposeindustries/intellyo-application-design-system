beforeEach(function () {
  browser.currentTestName = this.currentTest.title;
  browser.currentDescribe = this.currentTest.fullTitle().slice(0, -browser.currentTestName.length);
});

before(function () {
  browser.addCommand('moveToElement', (selector, x = 10, y = 10) => {
    if (browser.desiredCapabilities.browserName === 'firefox') {
      const element = browser.element(selector);
      if (browser.desiredCapabilities.browserName.toLowerCase().includes('firefox')) {
        const pos = browser.getLocation(selector);
        browser.actions([{
          type: 'pointer',
          id: `mouse-${Date.now()}`,
          parameters: {pointerType: 'mouse'},
          actions: [
            {
              type: 'pointerMove', element: element.value, duration: 0, x: pos.x + x, y: pos.y + y
            }
          ]
        }]);
      }
    } else {
      browser.moveToObject(selector);
    }
  });
});
