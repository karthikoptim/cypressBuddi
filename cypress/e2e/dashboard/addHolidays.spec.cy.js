import * as dataUtils from '../../fixtures/fakerData.js'
import * as randomDate from '../../utilities/utils.js'

describe('All Employess', () => {
    let date = randomDate.futureDate()
    let eventData;
    let loginTestData;

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user;
        })
        eventData = dataUtils.randomData()
    })

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    it('should add holidays', () => {
        cy.clickOnDashboardPanelText()
        cy.clickOnAddHolidaysButton()
        cy.addHolidays(eventData[0], date)
    })

    it('should add events', () => {
        cy.clickOnDashboardPanelText()
        cy.clickOnAddEventsButton()
        cy.addEvents(eventData[1], date)
    })
})

