describe('login', () => {
    let loginTestData

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user;
        })
    })

    it('login as admin with valid credentials', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    it('logout from application', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })
})