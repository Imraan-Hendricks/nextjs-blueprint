/// <reference types="cypress" />

Cypress.Commands.add('delayRequest', (method, url, alias, duration = 1000) => {
  cy.intercept(method, url, (request) => {
    return Cypress.Promise.delay(duration).then(() => {
      request.continue;
    });
  }).as(alias);
});

Cypress.Commands.add('getById', (id) => {
  return cy.get(`[data-cy="${id}"]`);
});
