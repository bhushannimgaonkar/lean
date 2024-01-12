

describe("Verify Add employee functionality for the project",()=>{
    it('with valid login and valid password',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("Admin")
         
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Dashboard').should('be.visible')

        //click on PIM

        cy.contains('PIM').click()
       //Click on Add employee
       cy.contains('Add Employee').click()

       cy.get('input[name="firstName"]').type("Bhushan")
       cy.get('input[name="lastName"]').type("Nimgaonkar")

       cy.get('button[type="submit"]').click()

       cy.contains('Successfully Saved').should('be.visible')


    })

})