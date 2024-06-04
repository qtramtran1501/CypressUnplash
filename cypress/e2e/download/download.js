import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../page-objects/pages/home";
import { commonHelper } from "../../utils/helpers/common";

When(`I open a random photo`, () => {
  const randNum = commonHelper.getRandomInRange(1, 15);
  homePage.clickRandomPicture(randNum);
});

When(`I download this photo`, () => {
  homePage.clickBtnDownloadPicture();
});

Then(`I notice that the image is downloadable and the correct image has been saved`, () => {
  cy.verifyDownload('.jpg', { contains: true });
});