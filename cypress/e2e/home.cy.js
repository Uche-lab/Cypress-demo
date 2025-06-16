describe('Simple test', () => {
  it('visits a page and checks content', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink'); // Will pass
  });
});