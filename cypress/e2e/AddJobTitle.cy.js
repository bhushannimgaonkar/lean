describe("Verify Job Title functionality",()=>{
    it('add new job title',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("Admin")
         
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Dashboard').should('be.visible')

        //click on PIM

        cy.contains('Admin').click()
       //Click on Job Menu
       cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span').click()
       //click on Job titles option
       cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()
       //click on Add button
       cy.contains('Add').click()
       //enter job title
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("sgsdgdsgss")
       //enter job description
       cy.get('textarea[placeholder="Type description here"]').type("dssfgsafsafa") 
       
       //click on save button
       cy.get('button[type="submit"]').click()

       cy.contains('Successfully Saved').should('be.visible')


    })})