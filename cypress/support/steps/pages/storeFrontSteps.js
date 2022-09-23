import { storeFrontPage } from '../../base'

Given(/^an anonymous user access the website$/, () => {
  cy.visit('/')
  storeFrontPage.acceptCookies()
})

Given(/^filters by all (Hatchbacks) models$/, (modelType) => {
  storeFrontPage.filterByModel(modelType)
})
Given(/^hovers the (A\-Class) from the list$/, (modelName) => {
  storeFrontPage.hoverCarType(modelName)
});

Given(/^selects (Build your car)$/, (hoverFunction) => {
  storeFrontPage.selectHoverFunction(hoverFunction)
});