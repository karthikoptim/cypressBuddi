
import * as randomData from '../../utilities/utils.js'
import resourceData from '../../fixtures/resourceTrackingData.json'

describe('resourceTracking', () => {

    const Date = randomData.todayDate();
    const serialID = randomData.generateRandomString();
    const file = 'cypress/fixtures/employee_details (7).xlsx'
    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it.skip('addResource', () => {      
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.addResource('OW112233', Date , resourceData.deviceType, serialID, resourceData.Model, resourceData.totalAssigned)
    })

    it.skip('exportResourcefile', () => {      
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.exportResource()
    })

    it.skip('downloadSampleResourcefile', () => {      
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.clickOnImportExcelSheetFromResourceTracking()
        cy.downloadSampleResourceTrackingFile()
    })

    it('uploadResourcefile', () => {      
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.clickOnImportExcelSheetFromResourceTracking()
        cy.uploadResourceTrackingFile(file)
       
    })

    
})


