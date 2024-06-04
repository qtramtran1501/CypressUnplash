import { requestHelper } from "../../helpers/request";
import { photoEndpoint } from "../endpoints/photo";

const url = Cypress.env('apiUrl');

export const photoService = {
  unlikePhoto(id) {
    const endpoint = url + photoEndpoint.UNLIKE_DELETE_ENDPOINT(id);
    return requestHelper.sendDELETE({endpoint: endpoint});
  }
};