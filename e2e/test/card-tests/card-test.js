const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const CARD_XPATH = '.card .card:nth-child(1)';
const CARD_WITH_CAPTION_XPATH = '.card .card:nth-child(2)';
const CARD_WITH_CAPTION_AND_I_XPATH = '.card .card:nth-child(3)';

//test names
const CARD = 'Card';
const CARD_WITH_CAPTION = 'Card-with-caption';
const CARD_WITH_CAPTION_AND_I = 'Card-with-caption-and-i';

describe('FEF card tests', () => {

  it('Checks the fef cards page title and browser compare visual regression', () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF cards page screenshot not similar to other configurations');
  });

  it('should check ' + CARD, () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElementAndCompareWithRef(CARD_XPATH,
      {ffAndWindowsTolerance: 6.1, windowsTolerance: 6, defaultTolerance: 1.5, ignoreComparison: false}),
      'Card is not similar to reference picture');
  });

  it('should check ' + CARD_WITH_CAPTION, () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElementAndCompareWithRef(CARD_WITH_CAPTION_XPATH,
      {windowsTolerance: 6, defaultTolerance: 3.1, ignoreComparison: false}),
      'Card with caption is not similar to reference picture');
  });

  it('should check ' + CARD_WITH_CAPTION_AND_I, () => {
    browser.url('/cards');
    assert(takeScreenShotOfElementAndCompareWithRef(CARD_WITH_CAPTION_AND_I_XPATH,
      {windowsTolerance: 6, defaultTolerance: 2, ignoreComparison: false}),
      'Card with caption and i is not similar to reference picture');
  });

});
