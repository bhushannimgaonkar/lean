describe("verify login function of the project",()=>{
it('with valid login and valid password',()=>{
     
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]',{timeout:40000}).type("Admin")
     
    cy.get('input[name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Dashboard').should('be.visible')

    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

it('with invalid login and valid password',()=>{
     
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("sample")
     
    cy.get('input[name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})

it('with valid login and invalid password',()=>{
     
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("Admin")
     
    cy.get('input[name="password"]').type("sample")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})
it('with invalid login and invalid password',()=>{
     
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("sample")
     
    cy.get('input[name="password"]').type("sample")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})


})