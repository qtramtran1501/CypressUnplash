export const menuBarLocator = {
  LNK_LOGIN_LOCATOR: `a[href="${Cypress.config('baseUrl')}/login"]`,
  IMG_AVATAR_PROFILE_LOCATOR: 'button[title="Your personal menu button"]',
  LNK_VIEW_PROFILE_LOCATOR: '//div[@role="menu"]//child::ul//a[text()="View profile"]'
};