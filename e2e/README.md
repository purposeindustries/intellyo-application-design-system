# Intellyo's Application Design System E2E tests

###dependencies
 - JDK

###usage

The easiest way to run E2E tests: type npm run test:e2e to the terminal. If you do this it will run the tests locally with a headless chrome.

if you want to run tests on saucelabs you have to cp the .env.example to .env with "cp .env.example ./.env" and fill the variables.

You can use environment variables to change the run conditions, eg.:
 - "BROWSER=firefox type npm run test:e2e" change the browser to firefox
 - "BROWSER=firefox,chrome type npm run test:e2e" change the browsers to firefox and chrome
 - "CI=true npm run test:e2e" or "TEST_PROVIDER=sauce npm run test:e2e" will use sauclabs as driver
