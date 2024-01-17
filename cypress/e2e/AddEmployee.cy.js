

describe("Verify Add employee functionality for the project",()=>{
    it('Add valid employee funtionality',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("Admin")
         
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Dashboard').should('be.visible')

        //click on PIM

        cy.contains('PIM').click()
       //Click on Add employee
       cy.contains('Add Employee').click()

       let randomfirstname=(Math.random() + 1).toString(36).substring(7);
       let randomlastname = (Math.random() + 1).toString(36).substring(7);

       cy.get('input[name="firstName"]').type("Firstaname"+randomfirstname)
       cy.get('input[name="lastName"]').type("LastName"+randomlastname)

       cy.get('button[type="submit"]').click()

       cy.contains('Successfully Saved').should('be.visible')


    })

    it('Verify mandatory fields for add empployee functionality',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("Admin")
         
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Dashboard').should('be.visible')

        //click on PIM

        cy.contains('PIM').click()
       //Click on Add employee
       cy.contains('Add Employee').click()

       cy.get('button[type="submit"]').click()

       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(1) > span').should('be.visible')
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(3) > span').should('be.visible')

    })

})