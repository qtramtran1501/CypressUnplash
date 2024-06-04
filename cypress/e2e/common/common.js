const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given(`I log in with account`, () => {
  cy.login();
});