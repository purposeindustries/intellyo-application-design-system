const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const DELETE_ICON_SELECTOR_FIRST = '.intellyo-list-item:nth-child(1) .icon';
const NEW_LIST_ELEMENT_SELECTOR = '.list-new-button-wrap';
const ITEM_TO_DELET_XPATH = '//*[@class="intellyo-list-item"][contains(text(),"Write a cool JS library")]';
const QA_POWAAA_ELEMENT = '//*[@class="intellyo-list-item"][contains(text(),"QA POWAAA")]';
const EDIT_BUTTON_SELECTOR = '.button--normal';
const ADD_NEW_ITEM_BUTTON_SELECTOR = '.button-icon-wrapper';
const LIST_ELEMENT_EDIT_SELECTOR = '.list-item-editing';
const INPUT_FIELD = 'input[type="text"]';
const SAVE_BUTTON = '.list-item-editing .button-content';

//test names
const DELETE_LIST_ELEMENT = 'delete-list-element';
const ADD_NEW_ITEM_CHECK = 'add-new-item-check';
const LIST_EDITING = 'list-editing';
const ADD_NEW_ELEMENT = 'add-new-element';

describe('FEF lists tests', () => {

  it('Checks the the fef lists page title and browser compare visual regression', () => {
    browser.url('/lists');
    assert.equal(browser.getTitle(), 'Intellyo Application Design System');
    assert(takeScreenshotAndGetWholePageCompareResult({defaultTolerance: 3, ignoreComparison: false}),
      'Whole FEF avatars page screenshot not similar to other configurations');
  });


  it('should check ' + DELETE_LIST_ELEMENT, () => {
    browser.url('/lists');
    browser.click(DELETE_ICON_SELECTOR_FIRST);
    assert(!browser.isExisting(ITEM_TO_DELET_XPATH),
      'Deleted item existing in generic list');
  });

  it('should check ' + ADD_NEW_ITEM_CHECK, () => {
    browser.url('/lists');
    assert(browser.isExisting(EDIT_BUTTON_SELECTOR), 'Edit button is not existing in the DOM');
    browser.click(EDIT_BUTTON_SELECTOR);
    assert(browser.isExisting(NEW_LIST_ELEMENT_SELECTOR), 'New list element is not existing in the DOM');
    assert(takeScreenShotOfElement(NEW_LIST_ELEMENT_SELECTOR,
      {defaultTolerance: 1.8, ignoreComparison: false}),
       'Tags input is not similar to the reference');
  });

  it('should check ' + LIST_EDITING, () => {
    browser.url('/lists');
    assert(browser.isExisting(EDIT_BUTTON_SELECTOR), 'Edit button is not existing in the DOM');
    browser.click(EDIT_BUTTON_SELECTOR);
    assert(browser.isExisting(ADD_NEW_ITEM_BUTTON_SELECTOR), 'Add new item button is not existing in the DOM');
    browser.click(ADD_NEW_ITEM_BUTTON_SELECTOR);
    assert(browser.isExisting(LIST_ELEMENT_EDIT_SELECTOR), 'List edit element is not existing in the DOM');
    assert(takeScreenShotOfElement(LIST_ELEMENT_EDIT_SELECTOR,
      {defaultTolerance: 1.8, ignoreComparison: false}),
       'Tags input is not similar to the reference');
  });

  it('should check ' + ADD_NEW_ELEMENT, () => {
    browser.url('/lists');
    assert(browser.isExisting(EDIT_BUTTON_SELECTOR), 'Edit button is not existing in the DOM');
    browser.click(EDIT_BUTTON_SELECTOR);
    assert(browser.isExisting(ADD_NEW_ITEM_BUTTON_SELECTOR), 'Add new item button is not existing in the DOM');
    browser.click(ADD_NEW_ITEM_BUTTON_SELECTOR);
    assert(browser.isExisting(LIST_ELEMENT_EDIT_SELECTOR), 'List edit element is not existing in the DOM');
    assert(browser.isExisting(INPUT_FIELD), 'Input field element is not existing in the DOM');
    browser.setValue(INPUT_FIELD, 'QA POWAAA');
    browser.click(SAVE_BUTTON);
    assert(browser.isExisting(QA_POWAAA_ELEMENT),
      'Deleted item existing in generic list');
    assert(takeScreenShotOfElement(QA_POWAAA_ELEMENT,
      {defaultTolerance: 1.8, ignoreComparison: false}),
      'Tags input is not similar to the reference');
  });


});
