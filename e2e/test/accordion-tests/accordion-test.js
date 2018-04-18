const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

//Selectors/xpaths
const BASIC_INFO_ACCORDION_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]';
const BASIC_INFO_ACCORDION_CHILDREN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item"][1]//*[@class="accordion-item-children"]';
const BASIC_INFO_ACCORDION_OPEN_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]';
const BASIC_INFO_ACCORDION_INNER_WRAP_XPATH = '//*[@class="content"]//*[@class="accordions-page"]//*[@class="card"][1]//*[@class="card-body"][1]//*[@class="accordion-item accordion-item--open"][1]//*[@class="accordion-item-children-inner-wrapper"]';

//test names
const BASIC_INFO_ACCORDION = 'basic-info-accordion';
const BASIC_INFO_ACCORDION_OPEN = 'basic-info-accordion-open';

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


  it.only('junit', () => {
    var fs = require('fs');
    if (fs.existsSync('e2e/test_results/WDIO.xunit.firefox.0-4.xml')) {
        console.log('Yeeppp');
    }
    var parser = require('junit-xml-parser').parser;
    var fs = require('fs');
    let xml = fs.readFileSync('e2e/test_results/WDIO.xunit.firefox.0-4.xml', 'utf8');
    const Parser = require("junitxml-to-javascript");
    // console.log(xml);
    // new Parser({customTag: "GENERAL1"})
    //     .parseXMLString(xml)
    //     .then(e => console.log(JSON.stringify(e, null, 2)))
    //     .catch(e => console.error(e.message));

    var fs = require('fs');
    var parse = require('xml-parser');
    var inspect = require('util').inspect;

    var obj = parse(xml);
    console.log(inspect(obj, { colors: true, depth: Infinity }));

  });

});
