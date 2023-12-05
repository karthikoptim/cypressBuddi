import * as randomData from '../../utilities/utils.js'
import resourceData from '../../fixtures/resourceTrackingData.json'

describe('resource tracking', () => {
    let Date
    let serialID
    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
        serialID = randomData.generateRandomString();
        Date = randomData.todayDate();
    })

    it('add resource', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.addResource('OW112233', Date, resourceData.deviceType, serialID, resourceData.Model, resourceData.totalAssigned)
    })

    it('download sample resource file', () => {
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

    it('upload invalid format of resource excel file', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.clickOnImportExcelSheetFromResourceTracking()
        cy.uploadResourceTrackingFile(resourceData.file)
    })

    it('export resource file', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnResourceTracking()
        cy.exportResource()
    })
})


