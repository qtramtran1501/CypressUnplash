import { requestHelper } from "../../helpers/request";
import { userEndpoint } from "../endpoints/user";

const url = Cypress.env('apiUrl');

export const userService = {
  getInfoUser() {
    const endpoint = url + userEndpoint.INFO_USER_GET_ENDPOINT;
    return requestHelper.sendGET({ endpoint: endpoint });
  },

  getListLikes(username) {
    const endpoint = url + userEndpoint.LIST_LIKE_GET_ENDPOINT(username);
    return requestHelper.sendGET({
      endpoint: endpoint,
      qs: {
        page: 1,
        per_page: 10
      }
    });
  },

  getListCollections(username) {
    const endpoint = url + userEndpoint.LIST_COLLECTIONS_GET_ENDPOINT(username);
    return requestHelper.sendGET({
      endpoint: endpoint,
      qs: {
        page: 1,
        per_page: 10
      }
    });
  }
};