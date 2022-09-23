export default class CarConfiguratorElements {

    //Filters
    configuratorShadowHost = () => {return "[data-aem-modulename='owc-owcc-fe']"}
    fuelTypeFilter = () => {return "[data-primary-filter-id='technicalInformation.engine.fuelType'] button[aria-expanded]"}
    fuelTypeFilterLabels = () => {return "wb-checkbox-control label"}



    //CardList And Details
    carlist  = () => {return ".cc-motorization-comparison-card "}

    vehicleName  = () => {return ".cc-motorization-header__vehicle-name"}
    vehiclePrice  = () => {return ".cc-motorization-header__price"}
    vehicleEngineIcon  = () => {return "[name='engine']"}
    vehicleFuelIcon  = () => {return "[name='fuel']"}
    vehicleGearIcon  = () => {return "[name='gear']"}
    vehicleAcceleration  = () => {return "[data-motorization-comparison-data-id='technicalInformation.acceleration']"}
    vehicleEnginePropulsion  = () => {return "[data-motorization-comparison-data-id='technicalInformation.engine.propulsion.name']"}
    vehicleFuelConsumption  = () => {return "[data-motorization-comparison-data-id='technicalInformation.wltp.consumption.total.primaryGear.individual']"}
    vehicleCO2Emissions  = () => {return "[data-motorization-comparison-data-id='technicalInformation.wltp.emission.total.primaryGear.individual']"}



}
