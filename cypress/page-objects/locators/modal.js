export const modalLocator = {
  LNK_PHOTO_ROUTE_LOCATOR: '(//div[@data-test="photos-route"]//header/child::div/span)[1]',
  BTN_FOLLOW_LOCATOR: 'button[title="Follow"]',
  BTN_FOLLOWING_LOCATOR: 'button[title="Following"]',
  BTN_LIKE_LOCATOR: 'div[class^="ReactModal__Content"] button[title="Like"]',
  BTN_ADD_COLLECTION_LOCATOR: 'div[class^="ReactModal__Content"] button[title="Add to collection"]',
  BTN_COLLECTION_LOCATOR: '//h3[text()="Add to Collection"]/following::ul//h4/span',
  BTN_CLOSE_POPUP_PICTURE_LOCATOR: '(//div[starts-with(@class, "ReactModal__Content")]//button)[1]',
  BTN_CLOSE_POPUP_COLLECTION_LOCATOR: '((//div[@class="ReactModalPortal"])[2]//button)[1]',
  BTN_DOWNLOAD_PICTURE_LOCATOR: '(//div[starts-with(@class, "ReactModal__Content")]//a[@data-test="non-sponsored-photo-download-button"])[1]'
};