describe('expenditure', () => {
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
        cy.clickOnUploadBillButton()
        cy.verifyAddExpenditureHeaderTextIsDisplayed()
        cy.uploadBill('Water', 'description', '2023-12-04', 8000)
    })
})