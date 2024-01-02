import profileData from '../../fixtures/yourProfileData.json'

describe('your profile', () => {
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

    it('edit profile', () => {
        cy.clickOnYourProfileButtonFromPanel()
        cy.verifyProfileDetailsSectionIsDisplayed()
        cy.editProfileDetails(profileData.dob, profileData.mobileNumber, profileData.bloodGroup, profileData.location, profileData.emergencyContactName, profileData.emergencyPhoneNumber)
        cy.clickOnSaveButton()
    })

    it('cancel edit profile', () => {
        cy.clickOnYourProfileButtonFromPanel()
        cy.verifyProfileDetailsSectionIsDisplayed()
        cy.editProfileDetails(profileData.dob, profileData.mobileNumber, profileData.bloodGroup, profileData.location, profileData.emergencyContactName, profileData.emergencyPhoneNumber)
        cy.clickOnCancelButton()
    })

})