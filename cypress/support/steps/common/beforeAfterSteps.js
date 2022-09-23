import { gmail } from '../../base'

const { Before, After } = require('cypress-cucumber-preprocessor/steps')

Before({ tags: '@getEmailToken' }, () => {
  gmail.createCredentialsFile()
  gmail.getToken().then(({ body }) => {
    cy.writeFile('cypress/plugins/token.json', body)
  })
})

Before({ tags: '@smoke or @de or @uam' }, () => {
  //helpers.loadEnvLanguageFiles()
})



Before({ tags: '@randomEmail' }, () => {
  let randomEmail = `consensysnft+${Cypress._.random(0, 10000000)}@gmail.com`
  Cypress.env('randomEmail', randomEmail)
})

Before({ tags: '@auth0Customer' }, () => {
  let randomEmail = `AutomatedCustomer+${Cypress._.random(0, 10000000)}@consensys-nft.com`
  Cypress.env('AutomatedCustomer', randomEmail)
})

After({ tags: '@auth0Customer' }, () => {

})

