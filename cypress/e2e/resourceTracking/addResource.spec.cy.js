import * as randomData from '../../utilities/utils.js'
import resourceData from '../../fixtures/resourceTrackingData.json'

describe('Resource Tracking', () => {
    let Date,serialID,loginTestData
 
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
        serialID = randomData.generateRandomString();
        Date = randomData.todayDate();
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
    
    it('should add resource', () => {
        cy.clickOnResourceTracking()
        cy.addResource('OW112233', Date, resourceData.deviceType, serialID, resourceData.Model, resourceData.totalAssigned)
    })

    it('should download sample resource file', () => {
        cy.clickOnResourceTracking()
        cy.clickOnImportExcelSheetFromResourceTracking()
        cy.downloadSampleResourceTrackingFile()
    })

    it('should upload invalid format of resource excel file', () => {
        cy.clickOnResourceTracking()
        cy.clickOnImportExcelSheetFromResourceTracking()
        cy.uploadResourceTrackingFile(resourceData.file)
    })

    it('should export resource file', () => {
        cy.clickOnResourceTracking()
        cy.exportResource()
    })
})


