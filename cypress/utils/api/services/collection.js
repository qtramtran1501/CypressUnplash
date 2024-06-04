import { requestHelper } from "../../helpers/request";
import { collectionEndpoint } from "../endpoints/collection";

const url = Cypress.env('apiUrl');

export const collectionService = {
  createNewCollection() {
    const endpoint = url + collectionEndpoint.CREATE_COLLECTION_POST_ENDPOINT;
    return requestHelper.sendPOST({
      endpoint: endpoint,
      body: {
        title: 'Create new collection private',
        description: 'Test create new collection private',
        private: true
      }
    })
  },

  deleteCollection(id) {
    const endpoint = url + collectionEndpoint.DESTROY_COLLECTION_DELETE_ENDPOINT(id);
    return requestHelper.sendDELETE({ endpoint: endpoint });
  },

  getCollectionPhoto(id) {
    const endpoint = url + collectionEndpoint.GET_COLLECTION_PHOTO_GET_ENDPOINT(id);
    return requestHelper.sendGET({
      endpoint: endpoint,
      qs: {
        page: 1,
        per_page: 10
      }
    });
  },

  removePhoto(id, photoId) {
    const endpoint = url + collectionEndpoint.REMOVE_PHOTO_DELETE_ENDPOINT(id);
    return requestHelper.sendDELETE({
      endpoint: endpoint,
      qs: {
        photo_id: photoId
      }
    });
  }
};