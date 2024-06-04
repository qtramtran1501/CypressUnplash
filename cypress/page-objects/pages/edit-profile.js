import { editProfileLocator } from "../locators/edit-profile";

export const editProfilePage = {
  inputUsername(username) {
    cy.get(editProfileLocator.TXT_USERNAME_LOCATOR)
      .clear()
      .type(username);
  },

  clickBtnUpdateAccount() {
    cy.get(editProfileLocator.BTN_UPDATE_ACCOUNT_LOCATOR).click();
  },

  clickAvatarUser() {
    cy.get(editProfileLocator.IMG_AVATAR_USER_LOCATOR).click();
  },

  clickLnkViewProfile() {
    cy.xpath(editProfileLocator.LNK_VIEW_PROFILE_LOCATOR).click();
  },

  clickBtnCloseAlert() {
    cy.get(editProfileLocator.BTN_CLOSE_ALERT_LOCATOR).click
  }
};