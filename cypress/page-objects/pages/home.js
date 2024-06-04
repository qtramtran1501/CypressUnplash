import { homeLocator } from "../locators/home";
import { modalLocator } from "../locators/modal";
import { menuBarLocator } from "../locators/menu-bar";

export const homePage = {
  clickLinkLogin() {
    cy.get(menuBarLocator.LNK_LOGIN_LOCATOR).click();
  },

  clickFirstPicture() {
    cy.xpath(homeLocator.IMG_FIRST_PICTURE_LOCATOR).click();
  },

  hoverToPhotoRoute() {
    cy.hover(modalLocator.LNK_PHOTO_ROUTE_LOCATOR);
  },

  clickBtnFollow() {
    cy.get(modalLocator.BTN_FOLLOW_LOCATOR).click();
  },

  getBtnFollowing() {
    return cy.get(modalLocator.BTN_FOLLOWING_LOCATOR);
  },

  clickBtnFollowing() {
    cy.get(modalLocator.BTN_FOLLOWING_LOCATOR).click();
  },

  clickAvatarProfile() {
    cy.get(menuBarLocator.IMG_AVATAR_PROFILE_LOCATOR).click();
  },

  clickLnkViewProfile() {
    cy.xpath(menuBarLocator.LNK_VIEW_PROFILE_LOCATOR).click();
  },

  clickRandomPicture(index) {
    cy.xpath(homeLocator.IMG_RANDOM_INDEX_PICTURE_LOCATOR(index)).click();
  },

  likePicture() {
    cy.get(modalLocator.BTN_LIKE_LOCATOR).click();
    cy.xpath(modalLocator.BTN_CLOSE_POPUP_PICTURE_LOCATOR).click();
  },

  addPictureToCollection() {
    cy.get(modalLocator.BTN_ADD_COLLECTION_LOCATOR).click();
    cy.xpath(modalLocator.BTN_COLLECTION_LOCATOR).click();
    cy.xpath(modalLocator.BTN_CLOSE_POPUP_COLLECTION_LOCATOR).click();
    cy.xpath(modalLocator.BTN_CLOSE_POPUP_PICTURE_LOCATOR).click();
  },

  clickBtnDownloadPicture() {
    cy.xpath(modalLocator.BTN_DOWNLOAD_PICTURE_LOCATOR).click();
  }
};