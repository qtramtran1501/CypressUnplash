import { profileLocator } from "../locators/profile";

export const profilePage = {
  clickBtnEditProfile() {
    cy.xpath(profileLocator.BTN_EDIT_PROFILE_LOCATOR).click();
  },

  getTextFullName(fullName) {
    return cy.xpath(profileLocator.LBL_FULL__LOCATOR(fullName));
  },

  clickLnkLike() {
    cy.get(profileLocator.LNK_LIKE_LOCATOR).click();
    cy.reload();
  },

  getTextAmountLike() {
    return cy.xpath(profileLocator.LBL_AMOUNT_LIKE_LOCATOR);
  },

  getPicture() {
    return cy.xpath(profileLocator.IMG_PICTURE_LOCATOR);
  },

  clickLnkCollection() {
    cy.get(profileLocator.LNK_COLLECTION_LOCATOR).click();
    cy.reload();
  },

  clickCollectionCard() {
    cy.get(profileLocator.CRD_COLLECTION_FEED_CARD_LOCATOR).click();
  },

  getRemainingPhoto(id) {
    return cy.get(profileLocator.IMG_REMAINING_PICTURE_LOCATOR(id));
  }
};