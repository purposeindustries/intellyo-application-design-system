# Intellyo's Application Design System E2E tests

## dependencies
 - JDK

## usage:

### run the tests with local drivers:

First of all you have to open two terminal. In the first you have to start a FEF server with

- `npm run build`
- `npm run serve`

commands.

After that in the other (second) terminal type

- `npm run test:e2e`

to the terminal.

With command above the tests run in headless chrome. To run tests in other browser(s) you should use the BROWSER environment variable, eg.:

- `BROWSER=firefox npm run test:e2e`
- `BROWSER=firefox,chrome npm run test:e2e`

The first command make the tests run in firefox. The second will run in firefox and chrome.

### run the tests with Saucelabs:

To run tests on saucelabs you have to cp the .env.example to .env with "cp .env.example ./.env" and fill the environment variables.

If you have .env file, you can use CI or TEST_PROVIDER environment variables to use saucelabs eg.:

- `CI=true npm run test:e2e`
- `TEST_PROVIDER=sauce npm run test:e2e`

Both command do the same, use the saucelabs as a driver, but you get the results and the evidences locally.

### pictures

The results of the tests are written in the terminal, but you can check the created pictures about the elements in the same folder where the tests are located in the ./pics folder, next to the references.

### clean the Tests

If you have too many pics which is confusing you can run a command which clean every pics except of references.

- `npm run clean-test`


## Test developement guide

The FEF tests based on visual testing. The basic concept is to take screenshot of every status of elements or pages and make difference to a reference picture.

### Structure

You can find everything regarding to end to end testing in the "e2e" folder. There are two important folders located in e2e: test and utils. The "test" contains the folders of the tests of the different pages. The "utils" contains the functions for the tests.

### Test

Every folder in the test folder contains a .js file and a pics folder. This is a whole page test, e.g. the ./e2e/test/select-tests folder contains every tests of ux.Intellyo.com/select.

The tests located in the javascript file in groups.

The references, screenshots and the diff pictures (created by the js file) located in the pics folder.

The structure and the name of the pics are come from the structure of the test javascript file and the name of the test. For example the "this is the test set" describe contains a "I am the name of the test" test. This is stored in the "this-is-the-test-set" folder which contains a "I-am-the-name-of-the-test" folder (and other folders too). The pic of the element name generated from the last word of the test name, the time of the creation and the parameters of the the environment.

 An example of a reference:
  - e2e/test/buttons-tests/pics/reference/fef-buttons-tests/should-check-the-button:-yeah-button/yeah-button_reference_pic.png

  An example of a screenshot:
  - e2e/test/buttons-tests/pics/screen/fef-buttons-tests/should-check-the-button:-save-button/05-03-20-pm-2018-01-14_element_windows 10_element_chrome_v63_1400x982.png

### Utils

As it is mentioned above : The utils contains the functions for the tests. You can find here the tools for testing.

The most important two function are the takeScreenshotAndGetWholePageCompareResult and takeScreenShotOfElement. The first takes picture about a whole page and compare to the reference. The second takes a screenshot about an element and make difference to the reference.

### Ok... Ok... How can I write a test?

Ok let's write a test. Create a folder e.g. ./e2e/test/accordions-tests. Create a test file called accordion-test.js. Copy the structure of the tests from another "something-test.js". Rename the "describe" which will be your test set name. add and "it" and gave a name, this will be your test. First of all write in the it:
```
 browser.url('/accordions');
```

 This will open the accordion page. The 'browser' object is the model of your page, so you should use the browser for clicking an element for example:
```
 browser.click(ELEMENT_SELECTOR);
```

 You can find more infos about that [here](http://webdriver.io/api.html)

 So do something and take a screenshot of an element. You have to use the takeScreenShotOfElement() embedded in an 'assert' to fail the test if it is not under the tolerance.
```
  assert(takeScreenShotOfElement(ELEMENT_SELECTOR,
    {windowsTolerance: 12, firefoxTolerance: 15, defaultTolerance: 5.5, ignoreComparison: false}),
     'print it out if the test fails);
```

At the end all of these you have to see something like this:
```
const assert = require('assert');
const visualRegression = require('../../utils/visual-regression');
const { takeScreenshotAndGetWholePageCompareResult, takeScreenShotOfElement } = visualRegression;

describe('Your test set name', () => {

  it('your test name', () => {
    browser.url('/accordions');
     [Do something here]
    assert(takeScreenShotOfElement(ELEMENT_SELECTOR,
    {windowsTolerance: 12, firefoxTolerance: 15, defaultTolerance: 5.5, ignoreComparison: false}),
    'print it out if the test fails);
  });
});
```
