import { carConfiguratorElements } from '../base'

export default class CarConfiguratorPage {

  filterByFuel (fuelType) {
    cy.get(carConfiguratorElements.configuratorShadowHost()).should('exist').and('be.visible').shadow().within(() => {
      //Opening
      cy.get(carConfiguratorElements.fuelTypeFilter()).scrollIntoView({ easing: 'linear' }).should('be.visible').click({force:true})
      cy.get(carConfiguratorElements.fuelTypeFilterLabels()).should('be.visible').contains(fuelType).find('input').click({force:true})
      cy.wait(1000) //List Refresh
      //Closing
      cy.get(carConfiguratorElements.fuelTypeFilter()).should('be.visible').click({force:true})
    })
  }

  takeCardListScreenshot (screenshotName) {
  cy.screenshot(screenshotName,{ capture: 'runner', scale: true })

  }

  retrieveLowHighPrices (txtFileName) {
    let carListValues = []
    let sorted = []
    cy.get(carConfiguratorElements.configuratorShadowHost()).should('exist').and('be.visible').shadow().within(() => {
      cy.get(carConfiguratorElements.carlist()).then((carCardList) => {
        Cypress._.each(carCardList, (carCard) => {
          cy.wrap(carCard).within((carDetails) => {
            let carValues = this.populateCarCardList(carDetails)
            carListValues.push(carValues)
          })
        })
      })
    }).then(() => {
      sorted = Cypress._.orderBy(carListValues, ['vehiclePrice'], ['asc'])
      let highAndLow = {
        lowest: sorted[0],
        highest: sorted[sorted.length - 1]
      }
      cy.writeFile(txtFileName, highAndLow)
    })

  }

  populateCarCardList (carDetails) {

    return {
      vehicleName: carDetails.find(carConfiguratorElements.vehicleName()).text().trim(),
      vehiclePrice: carDetails.find(carConfiguratorElements.vehiclePrice()).text().trim(),
      vehicleEngineIcon: carDetails.find(carConfiguratorElements.vehicleEngineIcon()).parent().text().trim(),
      vehicleFuelIcon: carDetails.find(carConfiguratorElements.vehicleFuelIcon()).parent().text().trim(),
      vehicleGearIcon: carDetails.find(carConfiguratorElements.vehicleGearIcon()).parent().text().trim(),
      vehicleAcceleration: carDetails.find(carConfiguratorElements.vehicleAcceleration()).text().trim(),
      vehicleEnginePropulsion: carDetails.find(carConfiguratorElements.vehicleEnginePropulsion()).text().trim(),
      vehicleFuelConsumption: carDetails.find(carConfiguratorElements.vehicleFuelConsumption()).text().trim(),
      vehicleCO2Emissions: carDetails.find(carConfiguratorElements.vehicleCO2Emissions()).text().trim()
    }
  }

}


