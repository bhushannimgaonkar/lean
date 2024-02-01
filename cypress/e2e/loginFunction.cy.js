
import { afterEach } from "mocha";
import loginData from "../fixtures/login.json"
describe("verify login function of the project",()=>{
before("Starting Test Run",()=>{
        cy.log("Starting test run"); 
     
     })   
 
beforeEach("Launch URL or app",()=>{
    cy.visit('/web/index.php/auth/login');  
 
 })   

 afterEach("after running each test case",()=>{
    console.log("after test case run");
    cy.log(Cypress.mocha.getRunner().suite.ctx.currentTest.title+" Completed") 
 
 })   
 after("after running each test case",()=>{
    
   cy.log("after all the test cases completed")
 
 })   
it('with valid login and valid password',()=>{
     
    

    cy.get('input[name="username"]',{timeout:40000}).type(loginData.username)
     
    cy.get('input[name="password"]').type(loginData.password)

    cy.get('button[type="submit"]').click()

    cy.contains('Dashboard').should('be.visible')

    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

it('with invalid login and valid password',()=>{
     
    

    cy.get('input[name="username"]').type("sample")
     
    cy.get('input[name="password"]').type(loginData.password)

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})

it('with valid login and invalid password',()=>{
     
    

    cy.get('input[name="username"]').type(loginData.username)
     
    cy.get('input[name="password"]').type("sample")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})
it('with invalid login and invalid password',()=>{
     
  

    cy.get('input[name="username"]').type("sample")
     
    cy.get('input[name="password"]').type("sample")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
})



})