import * as randomData from '../../utilities/utils.js'

describe('Reimbursement', () => {
    const date = randomData.getRandomDateInLastMonth()
    const numberOfHours = randomData.getRandomNumber()
    let loginTestData
    
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
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

    it('should apply extra work', () => {
        cy.clickOnReimbursement()
        cy.clickOnApplyExtrawork()
        cy.applyExtraWork(date, numberOfHours)
    })
})