import profileData from '../../fixtures/yourProfileData.json'

describe('Your Profile', () => {
    let loginTestData

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

    it('should edit profile', () => {
        cy.clickOnYourProfileButtonFromPanel()
        cy.verifyProfileDetailsSectionIsDisplayed()
        cy.editProfileDetails(profileData.dob, profileData.mobileNumber, profileData.bloodGroup, profileData.location, profileData.emergencyContactName, profileData.emergencyPhoneNumber)
        cy.clickOnSaveButton()
    })

    it('should edit profile', () => {
        cy.clickOnYourProfileButtonFromPanel()
        cy.verifyProfileDetailsSectionIsDisplayed()
        cy.editProfileDetails(profileData.dob, profileData.mobileNumber, profileData.bloodGroup, profileData.location, profileData.emergencyContactName, profileData.emergencyPhoneNumber)
        cy.clickOnCancelButton()
    })

})