export const profileLocator = {
  BTN_EDIT_PROFILE_LOCATOR: `//div[@data-test="users-route"]//a[@href="${Cypress.config('baseUrl')}/account"]`,
  LBL_FULL__LOCATOR: (fullName) => `//div[@data-test="users-route"]//div[text()="${fullName}"]`,
  LNK_LIKE_LOCATOR: 'li > a[data-test="user-nav-link-likes"]',
  LBL_AMOUNT_LIKE_LOCATOR: '//a[@data-test="user-nav-link-likes"]/span/span',
  IMG_PICTURE_LOCATOR: '//div[@data-test="masonry-grid-count-three"]//figure[@itemprop="image"]',
  LNK_COLLECTION_LOCATOR: 'li > a[data-test="user-nav-link-collections"]',
  CRD_COLLECTION_FEED_CARD_LOCATOR: 'div[data-test="collection-feed-card"]',
  IMG_REMAINING_PICTURE_LOCATOR: (photoId) => `a[href="/photos/${photoId}"]`
};