# Intellyo's Application Design System E2E tests

## dependencies
 - JDK

## usage:

### run the tests with local drivers:

first of all you have to open two terminal. In the first you have to start a FEF server with

- npm run build
- npm run serve

commands.

After that in the other (second) terminal type

- npm run test:e2e

to the terminal.

With command above the tests run in headless chrome. To run tests in other browser(s) you should use the BROWSER environment variable, eg.:

- BROWSER=firefox npm run test:e2e
- BROWSER=firefox,chrome npm run test:e2e

The first command make the tests run in firefox. The second will run in firefox and chrome.

### run the tests with Saucelabs:

To run tests on saucelabs you have to cp the .env.example to .env with "cp .env.example ./.env" and fill the environment variables.

If you have .env file, you can use CI or TEST_PROVIDER environment variables to use saucelabs eg.:

- CI=true npm run test:e2e
- TEST_PROVIDER=sauce npm run test:e2e

Both command do the same, use the saucelabs as a driver, but you get the results and the evidences locally.
