export const userEndpoint = {
  INFO_USER_GET_ENDPOINT: '/me',
  LIST_LIKE_GET_ENDPOINT: (username) => `/users/${username}/likes`,
  LIST_COLLECTIONS_GET_ENDPOINT: (username) => `/users/${username}/collections`
};