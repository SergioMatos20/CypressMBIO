const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/assets/reports/cucumber/cucumber-json/",  // ** Path of .json file **//
    reportPath: "cypress/assets/reports/cucumber/reports/htmlreport",
    displayDuration: true,
    displayReportTime: true

});