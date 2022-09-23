// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('cypress-plugin-tab');
require('cypress-failed-log')
import './commands';
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable
        const nameParts = [runnable.title]

        // Iterate through all parents and grab the titles
        while (item.parent) {
            nameParts.unshift(item.parent.title)
            item = item.parent
        }

        const fullTestName = nameParts
            .filter(Boolean)
            .join(' -- ')           // this is how cypress joins the test title fragments

        const imageUrl = `screenshots/${
            Cypress.spec.name
        }/${fullTestName} (failed).png`

        addContext({test}, imageUrl)
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

afterEach(() => {

    if (window.cucumberJson?.generate) {
        const testState = window.testState;
        const stepResult =
            testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
            const featureFileLocation = Cypress.spec.name

            const html = `<img width="100%" type="image/png" src="../../../../screenshots/${featureFileLocation}/${screenshotFileName}">
                          <br> 
                          <video controls width="100%"><source type="video/mp4" src="../../../../videos/${featureFileLocation}.mp4"> </video>`

            stepResult.attachment = {
                data: html,
                media: {type: "text/html"},
                index: testState.currentStep,
                testCase: testState.formatTestCase(testState.currentScenario),
            };

        }
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
