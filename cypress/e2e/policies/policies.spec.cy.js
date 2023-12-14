import policyData from '../../fixtures/policyData.json'

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

    afterEach(() => {
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })

    it('upload invalid format of leaves excelFile', () => {
        cy.clickOnPoliciesButtonFromPanel()
        cy.addPolicy(policyData.policyName, policyData.path)
    })
})