const { Given, When, Then, After, Before } = require("@badeball/cypress-cucumber-preprocessor");
const { homePage } = require("../../page-objects/pages/home");
const { profilePage } = require("../../page-objects/pages/profile");
const { collectionService } = require("../../utils/api/services/collection");
const { userService } = require("../../utils/api/services/user");

Before({ tags: '@remove' }, function () {
  userService.getListCollections(Cypress.env('username')).then(res => {
    if (res.body.length > 0) {
      res.body.forEach(collection => {
        collectionService.deleteCollection(collection.id);
      })
    }
  });
});

Given(`I create a private collection`, () => {
  collectionService.createNewCollection().then(res => {
    const collectionId = res.body.id;
    cy.wrap(collectionId).as('collectionId');
  });
});

Given(`I add 2 random photos to the newly created collection`, () => {
  for (let i = 0; i < 2; ++i) {
    homePage.clickRandomPicture(i + 1);
    homePage.addPictureToCollection();
  }
});

Given(`I remove 1 photo from the newly created collection`, () => {
  cy.get('@collectionId').then(id => {
    collectionService.getCollectionPhoto(id).then(res => {
      const removePhotoId = res.body[0].id;
      const remainingPhotoId = res.body[1].id;
      collectionService.removePhoto(id, removePhotoId);
      cy.wrap(remainingPhotoId).as('remainingPhotoId');
    });
  });
});

When(`I go to collection page`, () => {
  homePage.clickAvatarProfile();
  homePage.clickLnkViewProfile();
  profilePage.clickLnkCollection();
  profilePage.clickCollectionCard();
});

Then(`I notice that the photo has been removed successfully from the collection`, () => {
  cy.get('@collectionId').then(id => {
    collectionService.getCollectionPhoto(id).then(res => {
      expect(res.body.length).to.eq(1);
    });
  });
});

Then(`there is only 1 remaining photo in the collection`, () => {
  cy.get('@remainingPhotoId').then(id => {
    profilePage.getRemainingPhoto(id).should('be.visible');
  });
});

After({ tags: '@remove' }, function () {
  cy.get('@collectionId').then(id => {
    collectionService.deleteCollection(id);
  });
});