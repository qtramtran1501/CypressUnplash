const { Given, When, After, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");
const { homePage } = require("../../page-objects/pages/home");
const { photoService } = require("../../utils/api/services/photo");
const { userService } = require("../../utils/api/services/user");

Before({ tags: '@follow' }, function () {
  userService.getListLikes(Cypress.env('username')).then(res => {
    if (res.body.length > 0) {
      res.body.forEach(photo => {
        photoService.unlikePhoto(photo.id);
      });
    }
  });
});

Given(`I click the first photo on home page`, () => {
  homePage.clickFirstPicture();
});

When(`I hover on icon user at the top left corner`, () => {
  homePage.hoverToPhotoRoute();
});

When(`I click the Follow button`, () => {
  homePage.clickBtnFollow();
});

Then(`I observe button text turn into Following`, () => {
  homePage.getBtnFollowing().should('be.visible');
});

After({ tags: '@follow' }, function () {
  userService.getListLikes(Cypress.env('username')).then(res => {
    res.body.forEach(photo => {
      photoService.unlikePhoto(photo.id);
    });
  });
});