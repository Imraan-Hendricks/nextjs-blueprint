declare namespace Cypress {
  interface Chainable<Subject> {
    delayRequest(
      method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT',
      url: string,
      alias: string,
      duration?: number
    ): Chainable<any>;
    getById(id: string): Chainable<any>;
  }
}
