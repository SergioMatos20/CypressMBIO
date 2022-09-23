import { carConfiguratorPage } from '../../base'

let filename

Given(/^selects (Diesel) fuel type$/, (fuelType) => {
  carConfiguratorPage.filterByFuel(fuelType)
})

Then(/^a screenshot with the filename as "([^"]*)" is taken$/, (screenshotName) => {
  carConfiguratorPage.takeCardListScreenshot(screenshotName)
})

Then(/^the lowest and highest prices are saved in a file as "([^"]*)"$/, (txtFileName) => {
  filename = txtFileName
  carConfiguratorPage.retrieveLowHighPrices(txtFileName)
})

Then(/^the lowest and highest prices are between "([^"]*)" and "([^"]*)"$/, (lowest,highest) => {
  cy.readFile(filename).then((prices) => {
  let  parsedFile= JSON.parse(prices)
    expect(parseInt(parsedFile.lowest.vehiclePrice.replace(/\£|,/g, ''))).to.be.greaterThan(parseInt(lowest.replace(/\£|,/g, '')))
    expect(parseInt(parsedFile.highest.vehiclePrice.replace(/\£|,/g, ''))).to.be.lessThan(parseInt(highest.replace(/\£|,/g, '')))
  })
})