
const {takeScreenshotAndGetWholePageCompareResult} = require('../utils/visual-regression');

function moveMouse(aBrowser, selector, x = 100, y = 100) {
  const element = aBrowser.element(selector);
  if (aBrowser.desiredCapabilities.browserName.toLowerCase().includes('firefox')) {
    const pos = aBrowser.getLocation(selector);
    aBrowser.actions([{
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
  else {
    aBrowser.moveToObject(selector);
  }
}
describe('dummy test', () => {
  /*it('move', () => {
    browser.url('/');
    browser.moveTo(browser.element('#maki'), 10, 10);
    console.log('LOGS:\n', browser.log('browser').value.map(v => v.message).join('\n'));
  });*/

  it('actions', () => {
    browser.url('/');
    /*const pos = browser.getLocation('button#maki');
    const element = browser.element('#maki');
    browser.actions([{
      type: 'pointer',
      id: 'finger1',
      parameters: {
        pointerType: 'mouse'
      },
      actions: [{
        type: 'pointerMove',
        element: element.value,
        //duration: 0,
        x: pos.x + 2,
        y: pos.y + 2
      }]
    }]);*/

    //browser.actions();
    moveMouse(browser, '#maki', 10, 10);
    takeScreenshotAndGetWholePageCompareResult({});
    //console.log(browser.logTypes());
    //browser.moveToElement('button#maki', 10, 10);
    //console.log('LOGS:\n', browser.log('browser').value.map(v => v.message).join('\n'));
  });
});
