describe('Googlesearch', () => {
  it('googletest', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Australia');
    // Get a list of elements with a specific selector
const elements = cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > div');

// Log the number of elements found
elements.then($el => {
  const numberOfElements = $el.length;
  cy.log(`Found ${numberOfElements} elements`);
});

// Iterate through each element in the list
elements.each(($el, index, $list) => {
  // Perform actions on each element, e.g., click, type, etc.
  cy.log(`Element at index ${index}: ${$el.text()}`);
});

  })
})