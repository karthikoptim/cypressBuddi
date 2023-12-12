import expenditureDatas from '../../fixtures/expenditureData.json'
import * as date from '../../utilities/utils.js'

describe('expenditure', () => {
    const todayDate = date.todayDate()
    let loginTestData

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    afterEach(()=>{
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })

    it('uploading bills', () => {
        cy.clickOnExpenditureFromPanel()
        cy.clickOnUploadBill()
        cy.verifyAddExpenditureHeaderTextIsDisplayed()
        cy.uploadBill(expenditureDatas.expenditureType, expenditureDatas.description, todayDate, expenditureDatas.amount)
    })

    it('download files', () => {
        cy.clickOnExpenditureFromPanel()
        cy.clickOnDownloadFiles()
    })
})