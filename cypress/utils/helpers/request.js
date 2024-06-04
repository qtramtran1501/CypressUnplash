const headers = {
  Authorization: `Bearer ${Cypress.env('token')}`
};

export const requestHelper = {
  sendGET({ endpoint, qs }) {
    return cy.request({
      method: 'GET',
      url: endpoint,
      qs: qs,
      headers: headers,
      failOnStatusCode: false
    });
  },

  sendPOST({ endpoint, body }) {
    return cy.request({
      method: 'POST',
      url: endpoint,
      headers: headers,
      body: body,
      failOnStatusCode: false
    });
  },

  sendPUT({ endpoint, body }) {
    return cy.request({
      method: 'PUT',
      url: endpoint,
      headers: headers,
      body: body,
      failOnStatusCode: false
    });
  },

  sendDELETE({endpoint, qs}) {
    return cy.request({
      method: 'DELETE',
      url: endpoint,
      qs: qs,
      headers: headers,
      failOnStatusCode: false
    });
  }
};