const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const MODAL_SELECTOR = '.rodal-zoom-enter';
const OPEN_MODAL_XPATH = '//*[@class="button button--normal"][1]//*[@class="button-content"]';
const MODAL_WITH_ANIMATION_XPATH = '.rodal .rodal-fade-enter';
const OPEN_MODAL_WITH_ANIMATION_XPATH = '//*[@class="button button--normal"][2]//*[@class="button-content"]';

//test names
const MODAL = 'modal';
const MODAL_WITH_ANIMATION = 'modal-with-animation';

describe('FEF modal tests', () => {

  it('Checks the the fef modal page title and browser compare visual regression', () => {
    browser.url('/modals');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3.5, ignoreComparison: false}),
      'Whole FEF modal page screenshot not similar to other configurations');
  });

  it('should check ' + MODAL, () => {
    browser.url('/modals');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(OPEN_MODAL_XPATH);
    assert(takeScreenShotOfElementAndCompareWithRef(MODAL_SELECTOR,
      {defaultTolerance: 1, ignoreComparison: false}),
      'Modal is not similar to reference picture');
  });

  it('should check ' + MODAL_WITH_ANIMATION, () => {
    browser.url('/modals');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(OPEN_MODAL_WITH_ANIMATION_XPATH);
    assert(browser.getAttribute(MODAL_WITH_ANIMATION_XPATH, 'style').includes('animation-duration: 300ms;'), 'Animation duration is not 300ms');
    assert(takeScreenShotOfElementAndCompareWithRef(MODAL_WITH_ANIMATION_XPATH,
      {defaultTolerance: 1, ignoreComparison: false}),
      'Basic input is not similar to reference picture');
  });

});
