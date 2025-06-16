describe('Simple test', () => {
  it('visits a page and checks content', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').should('be.visible');
    cy.contains('docs.cypress.io').should('be.visible').click();
    cy.contains('Nonexistent Text').should('exist');
  })
});