export const collectionEndpoint = {
  CREATE_COLLECTION_POST_ENDPOINT: '/collections',
  DESTROY_COLLECTION_DELETE_ENDPOINT: (id) => `/collections/${id}`,
  GET_COLLECTION_PHOTO_GET_ENDPOINT: (id) => `/collections/${id}/photos`,
  REMOVE_PHOTO_DELETE_ENDPOINT: (id) => `/collections/${id}/remove`
};