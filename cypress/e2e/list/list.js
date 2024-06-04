const { Given, When, Then, After, Before } = require("@badeball/cypress-cucumber-preprocessor");
const { homePage } = require("../../page-objects/pages/home");
const { profilePage } = require("../../page-objects/pages/profile");
const { photoService } = require("../../utils/api/services/photo");
const { userService } = require("../../utils/api/services/user");

Before({ tags: '@list' }, function () {
  userService.getListLikes(Cypress.env('username')).then((res) => {
    if (res.body.length > 0) {
      res.body.forEach(photo => {
        photoService.unlikePhoto(photo.id);
      });
    }
  });
});

Given(`I like 3 random photos`, () => {
  for (let i = 0; i < 3; ++i) {
    homePage.clickRandomPicture(i + 1);
    homePage.likePicture();
  }
});

When(`I go to like page`, () => {
  homePage.clickAvatarProfile();
  homePage.clickLnkViewProfile();
  profilePage.clickLnkLike();
});

Then(`I see the number of likes is 3`, () => {
  profilePage.getTextAmountLike().invoke('text').should('eq', '3');
});

Then(`3 photos appear in Likes section`, () => {
  profilePage.getPicture().its('length').should('eq', 3);
});

After({ tags: '@list' }, function () {
  userService.getListLikes(Cypress.env('username')).then((res) => {
    res.body.forEach(photo => {
      photoService.unlikePhoto(photo.id);
    });
  });
})