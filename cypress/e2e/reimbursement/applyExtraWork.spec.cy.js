import * as randomData from '../../utilities/utils.js'

describe('reimbursement',()=>{
    const Date = randomData.getRandomDateInLastMonth()
    const NumberOfHours = randomData.getRandomNumber()
    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it('applyExtraWork',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.applyExtraWork(Date,NumberOfHours)
    })
})