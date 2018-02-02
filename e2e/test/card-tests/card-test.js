const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const CARD_XPATH = '//*[@class="card"]//*[@class="card"][1]';
const CARD_WITH_CAPTION_XPATH = '//*[@class="card"]//*[@class="card"][2]';
const CARD_WITH_CAPTION_AND_I_XPATH = '//*[@class="card"]//*[@class="card"][3]';

//test names
const CARD = 'Card';
const CARD_WITH_CAPTION = 'Card-with-caption';
const CARD_WITH_CAPTION_AND_I = 'Card-with-caption-and-i';

describe('FEF card tests', () => {

  it('Checks the the fef cards page title and browser compare visual regression', () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF cards page screenshot not similar to other configurations');
  });

  it('should check ' + CARD, () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElement(CARD_XPATH,
      {windowsTolerance: 6.5, defaultTolerance: 5, ignoreComparison: false}),
      'Card is not similar to reference picture');
  });

  it('should check ' + CARD_WITH_CAPTION, () => {
    browser.url('/cards');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElement(CARD_WITH_CAPTION_XPATH,
      {windowsTolerance: 6.5, defaultTolerance: 5, ignoreComparison: false}),
      'Card with caption is not similar to reference picture');
  });

  it('should check ' + CARD_WITH_CAPTION_AND_I, () => {
    browser.url('/cards');
    assert(takeScreenShotOfElement(CARD_WITH_CAPTION_AND_I_XPATH,
      {windowsTolerance: 6.5, defaultTolerance: 5, ignoreComparison: false}),
      'Card with caption and i is not similar to reference picture');
  });

});
