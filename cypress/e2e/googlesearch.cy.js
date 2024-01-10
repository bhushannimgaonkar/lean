describe('Googlesearch', () => {
  it('googletest', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Test');
  })
})