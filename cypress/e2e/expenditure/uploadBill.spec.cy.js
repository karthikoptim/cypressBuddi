
import expendituredatas from '../../fixtures/expenditureData.json'
import * as date from '../../utilities/utils.js'

describe('expenditure', () => {

const todayDate = date.todayDate()

    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it('uploadingBills', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnExpenditureFromPanel()
        cy.clickOnUploadBill()
        cy.verifyAddExpenditureHeaderTextIsDisplayed()
        cy.uploadBill(expendituredatas.expenditureType, expendituredatas.Description, todayDate, expendituredatas.Amount)

    })

    it('downloadBills', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnExpenditureFromPanel()
       cy.clickOnDownloadFiles()
    })


})