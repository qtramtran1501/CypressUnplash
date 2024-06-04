import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { editProfilePage } from "../../page-objects/pages/edit-profile";
import { homePage } from "../../page-objects/pages/home";
import { profilePage } from "../../page-objects/pages/profile";
import { commonHelper } from "../../utils/helpers/common";

const newUsername = `anhnt_${commonHelper.randomNumber()}`;

Given(`I go to the Profile page`, () => {
  homePage.clickAvatarProfile();
  homePage.clickLnkViewProfile();
});

When(`I click Edit tags link`, () => {
  profilePage.clickBtnEditProfile();
});

When(`I edit the username field`, () => {
  editProfilePage.inputUsername(newUsername);
  Cypress.env('username', newUsername);
});

When(`I click the Update Account button`, () => {
  editProfilePage.clickBtnUpdateAccount();
});

When(`I go to profile page`, () => {
  editProfilePage.clickBtnCloseAlert();
  editProfilePage.clickAvatarUser();
  editProfilePage.clickLnkViewProfile();
});

Then(`I observe that it will take me to the Profile page`, () => {
  cy.url().should('eq', `${Cypress.config('baseUrl')}/@${newUsername}`);
});

Then(`My full name is displayed`, () => {
  profilePage.getTextFullName('Anh NT').should('be.visible');
});