export const homeLocator = {
  IMG_FIRST_PICTURE_LOCATOR: '(//figure[@itemprop="image"])[1]',
  IMG_RANDOM_INDEX_PICTURE_LOCATOR: (index) => `(//div[@data-test="masonry-grid-count-three"]/div/figure[@itemprop="image"])[${index}]`,
};