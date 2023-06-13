describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
  });

  it('should have h1', () => {
    cy.get('h1').contains('Home');
  });
});
