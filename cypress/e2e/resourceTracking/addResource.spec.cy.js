
import * as randomData from '../../utilities/utils.js'
import resourceData from '../../fixtures/resourceTrackingData.json'

describe('resourceTracking', () => {

    const Date = randomData.todayDate();
    const serialID = randomData.generateRandomString();

    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it('addResource', () => {      
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.addResource('752', Date , resourceData.deviceType, serialID, resourceData.Model, resourceData.totalAssigned)
        //cy.addResource(id, date, deviceType, serialId, model, totalAssigne)
    })
})