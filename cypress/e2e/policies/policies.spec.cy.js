import policydata from '../../fixtures/policyData.json'


describe('salary management', () => {

    let loginTestData;
    before(() => {
        cy.fixture('loginData').then((data) => {
            loginTestData = data
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    it('upload nnvalid foramrt of leaves excelFile', () => {
        cy.clickOnPoliciesButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed(policydata.policyName,policydata.path)
    })
})