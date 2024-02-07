
import login from "../Page Objects/loginPage.po"
import dashboard from "../Page Objects/dashboardPage.po"
import addEmployee from "../Page Objects/addEmployeePage.po"
describe("Verify Add employee functionality for the project",()=>{
    it('Add valid employee funtionality',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get(login.usernamefield()).type("Admin")
         
        cy.get(login.passwordfield()).type("admin123")
    
        cy.get(login.loginButton()).click()
    
        cy.contains(dashboard.dashboardMenu()).should('be.visible')

        //click on PIM

        cy.contains(dashboard.PIMmenu()).click()
       //Click on Add employee
       cy.contains(addEmployee.addemployeeMenu()).click()

       let randomfirstname=(Math.random() + 1).toString(36).substring(7);
       let randomlastname = (Math.random() + 1).toString(36).substring(7);

       cy.get(addEmployee.firstnamefield()).type("Firstaname"+randomfirstname)
       cy.get(addEmployee.lastnamefield()).type("LastName"+randomlastname)

       cy.get(addEmployee.savebuttonfield()).click()

       cy.contains(addEmployee.successmessagefield()).should('be.visible')


    })

    it('Verify mandatory fields for add empployee functionality',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get(login.usernamefield()).type("Admin")
         
        cy.get(login.passwordfield()).type("admin123")
    
        cy.get(login.loginButton()).click()
    
        cy.contains(dashboard.dashboardMenu()).should('be.visible')

        //click on PIM

        cy.contains(dashboard.PIMmenu()).click()
       //Click on Add employee
       cy.contains(addEmployee.addemployeeMenu()).click()

       cy.get(addEmployee.savebuttonfield()).click()

       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(1) > span').should('be.visible')
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(3) > span').should('be.visible')

    })

})