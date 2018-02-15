const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const BASIC_INFO_ACCORDION_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]';
const BASIC_INFO_ACCORDION_CHILDREN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]//*[@class="accordion-item-children"]';
const BASIC_INFO_ACCORDION_OPEN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]';
const BASIC_INFO_ACCORDION_INNER_WRAP_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]//*[@class="accordion-item-children-inner-wrapper"]';

//test names
const BASIC_INFO_ACCORDION = 'basic-info-accordion';
const BASIC_INFO_ACCORDION_OPEN = 'basic-info-accordion-open';

//Selectors/xpaths
const INPUT_SELECTOR = 'input[type=file]';
const FIRST_AVATAR_SELECTOR = '.card-body:nth-child(2) .user-avatar';

//test names
const UPLOAD_FILE = 'upload-file';

//pic path
const PIC_PATH = './e2e/utils/pics/IMG_0090.jpg';

//Selectors/xpaths
const SAVE_BUTTON_SELECTOR = 'span=Save';
const YEAH_DROPDOWN_XPATH = '.dropdown';
const SAVE_BUTTON_XPATH = '/html/body/div[1]/div/div/div/div/div[4]/div/div/div/button'; //TODO: create a normal xpath

//test names
const YEAH_DROPDOWN_NAME = 'Yeah-button';
const YEAH_DROPDOWN_MOUSEOVER_NAME = 'Yeah-button-mouseover';
const SAVE_BUTTON_NAME = 'Save-button';
const SAVE_BUTTON_LOADING_NAME = 'Save-button-loading';

//Selectors/xpaths
const CARD_XPATH = '//*[@class="card"]//*[@class="card"][1]';
const CARD_WITH_CAPTION_XPATH = '//*[@class="card"]//*[@class="card"][2]';
const CARD_WITH_CAPTION_AND_I_XPATH = '//*[@class="card"]//*[@class="card"][3]';

//test names
const CARD = 'Card';
const CARD_WITH_CAPTION = 'Card-with-caption';
const CARD_WITH_CAPTION_AND_I = 'Card-with-caption-and-i';

//Selectors/xpaths
const BASIC_INPUT = '//*[@placeholder="Basic"]';

//test names
const BASIC_INPUT_NAME = 'Basic-input';
const BASIC_INPUT_CLICKED_NAME = 'Basic-input-clicked';
const BASIC_INPUT_ADDED_TEXT_NAME = 'Basic-input-added-text';

describe('FEF accordions tests', () => {

  it('Checks the the fef accordions page title and browser compare visual regression', () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF accordions page screenshot not similar to other configurations');
  });

  it('should check ' + BASIC_INFO_ACCORDION, () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(browser.element(BASIC_INFO_ACCORDION_INNER_WRAP_XPATH).message
     === 'An element could not be located on the page using the given search parameters.');
    assert(browser.getAttribute(BASIC_INFO_ACCORDION_CHILDREN_XPATH, 'style') === 'height: 0px; opacity: 0;', 'Accordion children height and/or opacity note 0');
    assert(takeScreenShotOfElement(BASIC_INFO_ACCORDION_XPATH,
      {defaultTolerance: 3.5, ignoreComparison: false}),
      'Basic accordion info is not similar to reference picture');
  });

  it('should check ' + BASIC_INFO_ACCORDION_OPEN, () => {
    browser.url('/accordions');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INFO_ACCORDION_XPATH);
    assert(takeScreenShotOfElement(BASIC_INFO_ACCORDION_OPEN_XPATH,
      {defaultTolerance: 6, ignoreComparison: false}),
      'Basic accordion info in opened state is not similar to reference picture');
  });

});

describe('FEF buttons tests', () => {

  it('Checks the the fef buttons page title and browser compare visual regression', () => {
    browser.url('/buttons');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF buttons page screenshot compare to a reference picture');
  });


  it('should check the button: ' + YEAH_DROPDOWN_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElement(YEAH_DROPDOWN_XPATH,
      {defaultTolerance: 6, ignoreComparison: false}),
       '"Yeah dropdown" is not similar to the reference');
  });

  it('should check the button with mouseover: ' + YEAH_DROPDOWN_MOUSEOVER_NAME, () => {
    browser.url('/buttons');
    browser.moveToElement(YEAH_DROPDOWN_XPATH);
    assert(browser.isExisting(YEAH_DROPDOWN_XPATH), '"Yeah dropdown" is not existing in the DOM');
    assert(takeScreenShotOfElementAndCompareWithRef('.dropdown',
      {defaultTolerance: 6}),
      '"Yeah dropdown" with mouseover is not similar to the reference');
  });

  it('should check the button: ' + SAVE_BUTTON_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_XPATH).scroll();
    assert(browser.isExisting(SAVE_BUTTON_XPATH), 'Save button is not existing in the DOM');
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {defaultTolerance: 17.5, ignoreComparison: true}),
       'Save button is not similar to the reference before click');
    browser.click(SAVE_BUTTON_XPATH);

    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {defaultTolerance: 17.5, ignoreComparison: true}),
       'Save button is not similar to the reference after click');
  });

  it('should check the button: ' + SAVE_BUTTON_LOADING_NAME, () => {
    browser.url('/buttons');
    $(SAVE_BUTTON_SELECTOR).scroll();
    assert(browser.isExisting(SAVE_BUTTON_SELECTOR), 'Save button is not existing in the DOM before click for loading button');
    browser.click(SAVE_BUTTON_SELECTOR);
    assert(takeScreenShotOfElement(SAVE_BUTTON_XPATH,
      {windowsTolerance: 8.8, defaultTolerance: 3, ignoreComparison: false}),
      'Loading button is not similar to the reference after click loading on windows');
    $(SAVE_BUTTON_SELECTOR).waitForExist(8500);
  });

});

describe('FEF avatars tests', () => {

  it('Checks the the fef tooltips page title and browser compare visual regression', () => {
    browser.url('/avatars');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3.5, ignoreComparison: false}),
      'Whole FEF avatars page screenshot not similar to other configurations');
  });

  it('should check avatar ' + UPLOAD_FILE, () => {
    browser.url('/avatars');
    assert(browser.isExisting(INPUT_SELECTOR), 'Input selector is not existing in the DOM');
    browser.chooseFile(INPUT_SELECTOR, PIC_PATH);
    assert(takeScreenShotOfElement(FIRST_AVATAR_SELECTOR, {defaultTolerance: 11, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });
});

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

describe('FEF index tests', () => {

  it('Checks the the fef index page title and browser compare visual regression', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
    'Whole FEF index page screenshot compare to a reference picture');
  });
});

describe('FEF input tests', () => {

  it('Checks the the fef inputs page title and browser compare visual regression', () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 14, ignoreComparison: false}),
      'Whole FEF input page screenshot not similar to other configurations');
  });

  it('should check ' + BASIC_INPUT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 11.5, defaultTolerance: 4, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input is not similar to reference picture');
  });

  it('should check ' + BASIC_INPUT_CLICKED_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INPUT);
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 12, defaultTolerance: 9.2, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input clicked is not similar to reference picture');
  });

  it('should check ' + BASIC_INPUT_ADDED_TEXT_NAME, () => {
    browser.url('/inputs');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(BASIC_INPUT);
    browser.setValue(BASIC_INPUT, 'foobar\n');
    assert(takeScreenShotOfElement(BASIC_INPUT,
      {firefoxTolerance: 14, defaultTolerance: 11, ignoreComparison: false}), //TODO : Why firefox problematic?
      'Basic input with added text is not similar to reference picture');
  });

});
