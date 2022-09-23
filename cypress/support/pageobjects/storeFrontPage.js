import { storeFrontElements} from '../base'

export default class StoreFrontPage {

  filterByModel (model) {
    cy.get(storeFrontElements.ourModelsShadowHost()).should('exist').and('be.visible').scrollIntoView().shadow().within((models) => {
      cy.get(storeFrontElements.modelsSpan()).contains(model).click()
    })
  }

  acceptCookies () {
    cy.get(storeFrontElements.cookieBannerShadowHost()).should('exist').scrollIntoView().shadow().within(() => {
      cy.wait(1000)
      cy.get(storeFrontElements.acceptAllCookies()).should('exist').and('be.visible').click()
      cy.get(storeFrontElements.acceptAllCookies()).should('not.be.visible')
    })
  }

  hoverCarType (type) {
    cy.get(storeFrontElements.ourModelsShadowHost()).should('exist').and('be.visible').scrollIntoView().shadow().within(() => {
      cy.get(storeFrontElements.modelNameHref(type.toLowerCase())).trigger('mouseover')
    })
  }

  selectHoverFunction (action) {
    cy.get(storeFrontElements.ourModelsShadowHost()).should('exist').and('be.visible').scrollIntoView().shadow().within(() => {
      cy.contains(action).then((element) => {
        cy.visit(element[0].getAttribute('href'))
      })
    })
  }

}
