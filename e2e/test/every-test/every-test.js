const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement, takeScreenShotOfElementAndCompareWithRef } = visualRegression;

//Selectors/xpaths
const BASIC_INFO_ACCORDION_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]';
const BASIC_INFO_ACCORDION_CHILDREN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]//*[@class="accordion-item-children"]';
const BASIC_INFO_ACCORDION_OPEN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]';
const BASIC_INFO_ACCORDION_INNER_WRAP_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]//*[@class="accordion-item-children-inner-wrapper"]';

//Selectors/xpaths
const DANGER_ZONE_SELECTOR = '.sections-page .row .box';
const DANGER_ZONE_DELETE_BUTTON = '.sections-page .row .box .button';


//test names
const DANGER_ZONE = 'danger-zone';
const DANGER_ZONE_BUTTON_MOUSEOVER = 'danger-zone-button-mouseover';

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

//Selectors/xpaths
const MODAL_XPATH = '//*[@class="rodal-dialog rodal-zoom-enter"]';
const OPEN_MODAL_XPATH = '//*[@class="button button--normal"][1]//*[@class="button-content"]';
const MODAL_WITH_ANIMATION_XPATH = '//*[@class="rodal-dialog rodal-fade-enter"]';
const OPEN_MODAL_WITH_ANIMATION_XPATH = '//*[@class="button button--normal"][2]//*[@class="button-content"]';

//test names
const MODAL = 'modal';
const MODAL_WITH_ANIMATION = 'modal-with-animation';

//Selectors/xpaths
const CLICK_ME_POPOVER_XPATH = '//*[@class="overlay-trigger"]//*[contains(text(),"Click me!")]';
const OVERLAY_POPOVER_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]//*[@class="overlay popover"]';
const TRIGERED_OVERLAY = '//*[@class="overlay-trigger overlay-trigger--active"]';
const HOVER_ME_POPOVER_XPATH = '//*[@class="col col-3"][1]//*[@class="overlay-trigger"]//*[contains(text(),"Hover me!")]';
const TRIGERED_OVERLAY_XPATH = '//*[@class="overlay-trigger overlay-trigger--active"]';

//test names
const CLICK_ME_POPOVER = 'click-popover';
const OVERLAY_POPOVER = 'overlay-popover';
const HOVER_ME_POPOVER = 'hover-popover';

//Selectors/xpaths
const SELECT_HELLO_SELECTOR = '.dropdown:nth-child(2)';
const SELECT_HELLO_OPENED_XPATH = '//*[@class="card"][1]//*[@class="card-body"]//*[@class="dropdown select dropdown--open"]';
const SELECT_HELLO_OPENED_DROPDOWN_XPATH = '//*[@class="card"][1]//*[@class="card-body"]//*[@class="dropdown select dropdown--open"]//*[@class="dropdown-items"]';

//test names
const SELECT_HELLO = 'select-hello';
const SELECT_HELLO_OPENED = 'select-hello-opened';
const SELECT_HELLO_CLOSED = 'select-hello-closed';

//Selectors/xpaths
const TAGS_INPUT_WHOLE_ORIG_XPATH = '//*[@class="tagsinput tagsinput--size-normal"]';
const TAGS_INPUT_CLICKABLE = '//*[@class="button tagsinput-add-tag button--normal"]';
const TAGS_INPUT_WHOLE_CLICKED_XPATH = '//*[@class="tagsinput tagsinput--size-normal react-tagsinput--focused"]';
const TAGS_INPUT_INPUT = '//*[@class="react-tagsinput-input tagsinput-input"]';
const HAMBURGER_TAG_SELECTOR = '.toggleable-tags .button:nth-child(1)';

//test names
const TEST_NAME_TAGS_INPUT_NAME = 'tags-input';
const TEST_NAME_TAGS_INPUT_MOUSE_OVER = 'tags-input-mouse-over';
const TEST_NAME_TAGS_INPUT_CLICK = 'tags-input-click';
const TEST_NAME_TAGS_ADD_INPUT = 'tags-input-add-input';
const TEST_NAME_TAGS_ADD_INPUT_CLICK = 'tags-input-add-input-click';
const HAMBURGER_TAG = 'hamburger-tag';
const HAMBURGER_CLICK_TAG = 'hamburger-click-tag';
const HAMBURGER_MOUSEOVER_TAG = 'hamburger-mouseover-tag';

//Selectors/xpaths
const TOOLTIP_RIGHT_SELECTOR = '.card-body .col:nth-child(2) .overlay-trigger .UserAvatar';
const WHOLE_TOOLTIP_DIV_SELECTOR = '.card-body';

//test names
const TOOLTIP_RIGHT = 'tooltip-right';

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
    assert(takeScreenShotOfElement(MODAL_XPATH,
      {defaultTolerance: 3, ignoreComparison: false}),
      'Modal is not similar to reference picture');
  });

  it('should check ' + MODAL_WITH_ANIMATION, () => {
    browser.url('/modals');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(OPEN_MODAL_WITH_ANIMATION_XPATH);
    assert(browser.getAttribute(MODAL_WITH_ANIMATION_XPATH, 'style').includes('animation-duration: 300ms;'), 'Animation duration is not 300ms');
    assert(takeScreenShotOfElement(MODAL_WITH_ANIMATION_XPATH,
      {defaultTolerance: 3, ignoreComparison: false}),
      'Basic input is not similar to reference picture');
  });

});

describe('FEF popover tests', () => {

  it('Checks the the fef modal page title and browser compare visual regression', () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF popover page screenshot not similar to other configurations');
  });

  it('should check ' + CLICK_ME_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(browser.element(TRIGERED_OVERLAY).message
    === 'An element could not be located on the page using the given search parameters.',
    'Triggered overlay shows where its not allowed');
    assert(takeScreenShotOfElement(CLICK_ME_POPOVER_XPATH,
      {ffAndWindowsTolerance: 27, windowsTolerance: 19, defaultTolerance: 15.5, ignoreComparison: false}), //TODO: more than 20% tolerance
      'Click me popover is not similar to reference picture');
  });

  it('should check ' + OVERLAY_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.click(CLICK_ME_POPOVER_XPATH);
    assert(takeScreenShotOfElement(OVERLAY_POPOVER_XPATH,
      {defaultTolerance: 11, ignoreComparison: false}),
      'Overlay popover for click me is not similar to reference picture');
  });

  it('should check ' + HOVER_ME_POPOVER, () => {
    browser.url('/popover');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    browser.moveToElement(HOVER_ME_POPOVER_XPATH);
    browser.waitUntil(() =>
      browser.element(TRIGERED_OVERLAY_XPATH).isExisting(),
      15000,
      'does not show call button');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 2, ignoreComparison: false}),
      'Click me popover is not similar to reference picture');
  });

});

describe('FEF sections tests', () => {

  it('Checks the the fef modal page title and browser compare visual regression', () => {
    browser.url('/sections');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 4, ignoreComparison: false}),
      'Whole FEF popover page screenshot not similar to other configurations');
  });

  it('should check the section ' + DANGER_ZONE, () => {
    browser.url('/sections');
    assert(browser.isExisting(DANGER_ZONE_SELECTOR), 'Danger zone is not existing in the DOM');
    assert(takeScreenShotOfElement(DANGER_ZONE_SELECTOR,
      {localTolerance: 4.9, firefoxTolerance: 4.5, defaultTolerance: 3, ignoreComparison: false}),
       'Added tags input is not similar to the reference');
  });

  it('should check the section ' + DANGER_ZONE_BUTTON_MOUSEOVER, () => {
    browser.url('/sections');
    assert(browser.isExisting(DANGER_ZONE_DELETE_BUTTON), 'Danger zone is not existing in the DOM');
    browser.moveToElement(DANGER_ZONE_DELETE_BUTTON);
    assert(takeScreenShotOfElementAndCompareWithRef(DANGER_ZONE_DELETE_BUTTON,
      {localTolerance: 3.5, windowsTolerance: 11, defaultTolerance: 1, localIgnoreComparison: true}),
       'Added tags input is not similar to the reference');
  });
});

describe('FEF select tests', () => {

  it('Checks the the fef select page title and browser compare visual regression', () => {
    browser.url('/select');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF select page screenshot compare to a reference picture');
  });

  it('should check the input ' + SELECT_HELLO, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    assert(takeScreenShotOfElement(SELECT_HELLO_SELECTOR,
      {firefoxTolerance: 15.5, defaultTolerance: 5.7, ignoreComparison: false}),
       '"Hello" select is not similar to the reference');
  });

  it('should check the input ' + SELECT_HELLO_OPENED, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    browser.click(SELECT_HELLO_SELECTOR);
    assert(browser.isExisting(SELECT_HELLO_OPENED_XPATH), 'Select "Hello-opened" is not existing in the DOM');
    assert(takeScreenShotOfElement(SELECT_HELLO_OPENED_DROPDOWN_XPATH,
      {defaultTolerance: 7.5, ignoreComparison: false}),
       '"Hello" select opened is not similar to the reference');
  });

  it('should check the input ' + SELECT_HELLO_CLOSED, () => {
    browser.url('/select');
    assert(browser.isExisting(SELECT_HELLO_SELECTOR), 'Select "Hello" is not existing in the DOM');
    browser.click(SELECT_HELLO_SELECTOR);
    browser.click(SELECT_HELLO_OPENED_XPATH);
    assert(takeScreenShotOfElement(SELECT_HELLO_SELECTOR,
      {firefoxTolerance: 15.5, defaultTolerance: 5.7, ignoreComparison: false}),
       '"Hello" select closed is not similar to the reference');
  });

});

describe('FEF tags input tests', () => {

  it('Checks the the fef tags input page title and browser compare visual regression', () => {
    browser.url('/tagsinput');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 5.1, ignoreComparison: false}),
    'Whole FEF tags input page screenshot compare to a reference picture');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_NAME, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM');
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {defaultTolerance: 10, ignoreComparison: false}),
       'Tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_MOUSE_OVER, () => {
    if (!browser.desiredCapabilities.browserName.includes('firefox')) { //TODO: We should find solutions for moveToObject and other cross-browser problems
      browser.url('/tagsinput');
      assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before mouse over');
      browser.moveToObject(TAGS_INPUT_CLICKABLE, 0, 0);
      assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
        {defaultTolerance: 10, ignoreComparison: false}),
         'Mouse over tags input is not similar to the reference');
    }
  });

  it('should check the input: ' + TEST_NAME_TAGS_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before click');
    browser.click(TAGS_INPUT_CLICKABLE);
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {defaultTolerance: 11, ignoreComparison: false}),
       'Clicked tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, 'foobar\n');
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_CLICKED_XPATH,
      {defaultTolerance: 11, ignoreComparison: false}),
       'Added tags input is not similar to the reference');
  });

  it('should check the input: ' + TEST_NAME_TAGS_ADD_INPUT_CLICK, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(TAGS_INPUT_WHOLE_ORIG_XPATH), 'Tags input is not existing in the DOM before adding and clicking');
    browser.click(TAGS_INPUT_CLICKABLE);
    browser.setValue(TAGS_INPUT_INPUT, 'foobar\n');
    browser.click('span=hamburger');
    assert(takeScreenShotOfElement(TAGS_INPUT_WHOLE_ORIG_XPATH,
      {defaultTolerance: 11, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');
  });


  it('should check the input: ' + HAMBURGER_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    assert(takeScreenShotOfElement(HAMBURGER_TAG_SELECTOR,
      {ffAndWindowsTolerance: 34, firefoxTolerance: 28, windowsTolerance: 18, defaultTolerance: 16, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');

  });

  it('should check the input: ' + HAMBURGER_MOUSEOVER_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    browser.moveToElement(HAMBURGER_TAG_SELECTOR);
    assert(takeScreenShotOfElementAndCompareWithRef(HAMBURGER_TAG_SELECTOR,
      {defaultTolerance: 10, ignoreComparison: false}),
       'Added and clicked tags input is not similar to the reference');

  });

  it('should check the input: ' + HAMBURGER_CLICK_TAG, () => {
    browser.url('/tagsinput');
    assert(browser.isExisting(HAMBURGER_TAG_SELECTOR), 'Hamburger tag is not existing in the DOM before adding and clicking');
    browser.click(HAMBURGER_TAG_SELECTOR);
    assert(takeScreenShotOfElement(HAMBURGER_TAG_SELECTOR,
      {ffAndWindowsTolerance: 19, firefoxTolerance: 14, windowsTolerance: 16, defaultTolerance: 15.5, localIgnoreComparison: true }),
       'Added and clicked tags input is not similar to the reference');

  });
});

describe('FEF tooltip tests', () => {

  it('Checks the the fef tooltips page title and browser compare visual regression', () => {
    browser.url('/tooltip');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
      'Whole FEF tooltips page screenshot not similar to other configurations');
  });

  it('should check ' + TOOLTIP_RIGHT, () => {
    browser.url('/tooltip');
    assert(browser.isExisting(TOOLTIP_RIGHT_SELECTOR), 'Input selector is not existing in the DOM');
    browser.moveToElement(TOOLTIP_RIGHT_SELECTOR);
    browser.waitForExist('.overlay-trigger--active .user-avatar');
    assert(takeScreenShotOfElementAndCompareWithRef(WHOLE_TOOLTIP_DIV_SELECTOR, {localTolerance: 5.8, ffAndWindowsTolerance: 2.7, defaultTolerance: 2, ignoreComparison: false}),
      'Avatar input screenshot not similar to other configurations');
  });
});
