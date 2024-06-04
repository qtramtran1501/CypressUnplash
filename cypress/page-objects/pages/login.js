import { loginLocator } from "../locators/login";

export const loginPage = {
  inputEmail(email) {
    cy.get(loginLocator.TXT_EMAIL_LOCATOR).type(email);
  },

  inputPassword(password) {
    cy.get(loginLocator.TXT_PASSWORD_LOCATOR).type(password);
  },

  clickBtnLogin() {
    cy.get(loginLocator.BTN_LOGIN_LOCATOR).click();
  }
};