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

### run the tests with Saucelabs

To run tests on saucelabs you have to cp the .env.example to .env with "cp .env.example ./.env" and fill the environment variables.

If you have .env file, you can use CI or TEST_PROVIDER environment variables to use saucelabs eg.:

- `CI=true npm run test:e2e`
- `TEST_PROVIDER=sauce npm run test:e2e`

Both command do the same, use the saucelabs as a driver, but you get the results and the evidences locally.

### pictures

To see more information about the failing tests you can use the 'DEBUG' environment variable.

- `DEBUG=test CI=true npm run test:e2e`

### pictures

The results of the tests are written in the terminal, but you can check the created pictures about the elements in the same folder where the tests are located in the ./pics folder, next to the references.

### run only one test file

If you want to run just one file you can use the --spec argument. This argument not works with `npm run test:e2e`, you have to use `./node_modules/.bin/wdio`. Here is an example to run just the buttuns-test.js:

- `./node_modules/.bin/wdio wdio.conf.js --spec ./e2e/test/buttons-tests/buttons-test.js`

### clean the Tests

If you have too many pics which is confusing you can run a command which clean every pics except of references.

- `npm run clean-test`


## Test developement guide

FeF tests are based on visual testing. The basic concept is to take screenshots of every status of every element or page first and compare the difference between the reference pictures and the actual screenshots.

### Structure

You can find everything regarding to end to end testing in the "e2e" folder. There are two important folders located in e2e: test and utils. The "test" contains the folders of the tests of the different pages. The "utils" contains the functions for the tests.

### Test

Every folder in the test folder contains a .js file and a pics folder. These .js files test the whole page, e.g. the [./e2e/test/select-tests](/e2e/test/select-tests/) folder contains every tests of [ux.Intellyo.com/select](http://ux.Intellyo.com/select).

Each .js file represents a whole page test and each folder represents a page.

The reference pictures, screenshots and the diff pictures (created by the js file) located in the pics folder.

The structure and the name of the pics come from the structure of the test javascript file and the name of the test. For example the "this is the test set" describe contains a "I am the name of the test" test. This is stored in the "this-is-the-test-set" folder which contains a "I-am-the-name-of-the-test" folder (and other folders too). The pic of the element name generated from the last word of the test name, the time of the creation and the parameters of the the environment.

 An example of a reference:
  - e2e/test/buttons-tests/pics/reference/fef-buttons-tests/should-check-the-button:-yeah-button/yeah-button_reference_pic.png

  An example of a screenshot:
  - e2e/test/buttons-tests/pics/screen/fef-buttons-tests/should-check-the-button:-save-button/05-03-20-pm-2018-01-14_element_windows 10_element_chrome_v63_1400x982.png

### Utils

As it is mentioned above : The utils contain the functions for the tests. You can find here the tools for testing.

 The two most important functions are the takeScreenshotAndGetWholePageCompareResult and takeScreenShotOfElement. The first takes picture of a whole page and compare it to the reference. The second takes a screenshot of an element and create a diff picture by comparing it to the reference picture..

### Ok... Ok... How can I write a test?

Ok let's write a test. Create a folder e.g. `./e2e/test/accordions-tests`. Create a test file called accordion-test.js. Copy the structure of the tests from another "something-test.js". Rename the "describe" which will be your test set name. Add an "it" and gave a name, this will be your test. First of all write in the it:
```
 browser.url('/accordions');
```

 This will open the accordion page. The 'browser' object is the model of your page, so you should use the browser for clicking an element for example:
```
 browser.click(ELEMENT_SELECTOR);
```

 You can find more infos about browser object [here](http://webdriver.io/api.html)

 So do something and take a screenshot of an element. You have to use the takeScreenShotOfElement() embedded in an 'assert' to fail the test if it is not under the tolerance.
```
  assert(takeScreenShotOfElement(ELEMENT_SELECTOR,
    {windowsTolerance: 12, firefoxTolerance: 15, defaultTolerance: 5.5, ignoreComparison: false}),
     'print it out if the test fails);
```

At the end all of these you have to see something like this:
```js
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
Now you have your first test for FEF, congratulations.
