// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { homePage } = require("../page-objects/pages/home");
const { loginPage } = require("../page-objects/pages/login");
const { userService } = require("../utils/api/services/user");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
before(() => {
  userService.getInfoUser().then(res => {
    Cypress.env('username', res.body.username);
  });
});

Cypress.Commands.add('login', () => {
  cy.visit('/');
  homePage.clickLinkLogin();
  loginPage.inputEmail(Cypress.env('email'));
  loginPage.inputPassword(Cypress.env('password'));
  loginPage.clickBtnLogin();
});

Cypress.Commands.add('hover', (element) => {
  if (element.charAt(1) === "/") {
    cy.xpath(element).rightclick();
  } else {
    cy.get(element).rightclick();
  }
});
