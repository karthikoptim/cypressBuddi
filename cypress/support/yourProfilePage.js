const yourProfileButtonFromPanel = 'Your Profile'
const profileDetailsHeaderText = 'Profile Details'
const editProfile = 'Edit Profile'
const accountDetailsText = 'Account Details'
const dobInputField = '#dob'
const mobilenumberInputField = '#mobilenumber'
const bloodGroupDropdown = '#bloodGroup'
const locationInputField = '#location'
const emergencyContactNameInputField = '#emergencyContactName'
const emergencyMobileNumberInputField = '#emergencymobilenumber'
const saveButton = '[type="submit"]'
const CancelButton = 'Cancel'
const detailsUpdatedSuccessfully = 'Details Updated Successfully'

Cypress.Commands.add('clickOnYourProfileButtonFromPanel', () => {
    cy.contains(yourProfileButtonFromPanel).should('exist').and('be.visible').click()
})

Cypress.Commands.add('verifyProfileDetailsSectionIsDisplayed', () => {
    cy.contains(profileDetailsHeaderText).should('exist').and('be.visible').should('have.text', profileDetailsHeaderText)
})

Cypress.Commands.add('editProfileDetails', (dob, mobilenumber, bloodGroup, location, emergencyContactName, emergencyMobileNumber) => {
    cy.contains(editProfile).should('exist').and('be.visible').click()
    cy.contains(accountDetailsText).should('exist').and('be.visible').click().should('have.text', accountDetailsText)
    cy.get(dobInputField).should('exist').and('be.visible').clear().type(dob).should('have.value', dob)
    cy.get(mobilenumberInputField).should('exist').and('be.visible').clear().type(mobilenumber).should('have.value', mobilenumber)
    cy.get(bloodGroupDropdown).should('exist').and('be.visible').select(bloodGroup).should('have.value', bloodGroup)
    cy.get(locationInputField).should('exist').and('be.visible').clear().type(location).should('have.value', location)
    cy.get(emergencyContactNameInputField).should('exist').and('be.visible').clear().type(emergencyContactName).should('have.value', emergencyContactName)
    cy.get(emergencyMobileNumberInputField).should('exist').and('be.visible').clear().type(emergencyMobileNumber).should('have.value', emergencyMobileNumber)
})

Cypress.Commands.add('clickOnSaveButton', () => {
    cy.get(saveButton).should('exist').and('be.visible').click()
    cy.contains(detailsUpdatedSuccessfully)
})

Cypress.Commands.add('clickOnCancelButton', () => {
    cy.contains(CancelButton).should('exist').and('be.visible').click()
})

