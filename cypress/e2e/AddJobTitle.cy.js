import loginData from "../fixtures/login.json"
import JobTitleData from "../fixtures/JobTitle.json"
import login from "../Page Objects/loginPage.po"
import dashboard from "../Page Objects/dashboardPage.po"
import jobtitlepage from "../Page Objects/addJobTitlePage.po"
describe("Verify Job Title functionality",()=>{
    it('add new job title',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get(login.usernamefield()).type(loginData.username)
         
        cy.get(login.passwordfield()).type(loginData.password)
    
        cy.get(login.loginButton()).click()
    
        cy.contains(dashboard.dashboardMenu()).should('be.visible')

        //click on PIM

        cy.contains(dashboard.adminMenu()).click()
       //Click on Job Menu
       cy.xpath(jobtitlepage.jobdropdownMenu()).click()
       //click on Job titles option
       cy.get(jobtitlepage.jobtitlemenuoption()).click()
       //click on Add button
       cy.contains(jobtitlepage.jobtitleaddbutton()).click()

       let randomjobtitle=(Math.random() + 1).toString(36).substring(7);
       let randomdescription = (Math.random() + 1).toString(36).substring(7);
       //enter job title
       cy.xpath(jobtitlepage.jobtitlefield()).type(JobTitleData.Jobtitle+randomjobtitle)
       //enter job description
       cy.get(jobtitlepage.jobdescriptionfield()).type(JobTitleData.JobDescription+randomdescription) 
       
       //click on save button
       cy.get(jobtitlepage.savebutton()).click()

       cy.contains(jobtitlepage.successmessage()).should('be.visible')


    })
    it('Verify mandatory field for adding job titles. ',()=>{
         
        cy.visit('/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type(loginData.username)
         
        cy.get('input[name="password"]').type(loginData.password)
    
        cy.get('button[type="submit"]').click()
    
        cy.contains(dashboard.dashboardMenu()).should('be.visible')

        //click on PIM

        cy.contains(dashboard.adminMenu()).click()
       //Click on Job Menu
       cy.xpath(jobtitlepage.jobdropdownMenu()).click()
       //click on Job titles option
       cy.get(jobtitlepage.jobtitlemenuoption()).click()
       //click on Add button
       cy.contains(jobtitlepage.jobtitleaddbutton()).click()

       
       
       //click on save button
       cy.get(jobtitlepage.savebutton()).click()

       cy.get(jobtitlepage.errormessage()).should('be.visible')


    })

})