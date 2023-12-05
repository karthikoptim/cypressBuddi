import 'cypress-file-upload';

const allEmployeesPannelText = 'All Employees'
const addEmployeeButton = 'Add Employee'
const firstNameInputField = '#firstName'
const lastNameInputField = '[name="lastName"]'
const employeeeIDInputField = '[placeholder="Employee ID"]'
const emailInputField = '[name="email"]'
const roleDropDown = '#role'
const passwordInputField = '#password'
const dob = '#dob'
const joiningDate = '#joiningDate'
const qualificationsInputField = '[name="qualifications"]'
const depertmentInputField = '#department'
const genderDropDown = '#gender'
const mobileNumberInputField = '#mobilenumber'
const bloodGroupDropDown = '#bloodGroup'
const designationInputField = '#designation'
const salaryInputField = '#salary'
const locationInputField = '#location'
const certificates = 'Certificates '
const tenth = 'input[name="10th"]'
const intermediate = 'input[name="Intermediate"]'
const submitButton = 'Submit'
const SavedSuccessfullyPopUp = '[role="status"]' 
const uploadFileHeader = 'Upload File'
const importExcelSheetButton = 'Import Excel Sheet'
const downloadSampleFileLink = 'Download Sample File'
const uploadExcelButton = '#excel'
const submitButtonUploadExcel = 'Submit'
const dataAlreadyExistsOrExcelFormatisInvalidPopup = 'Data already exists or excel format is invalid.'
const exportData = 'Export Data'

Cypress.Commands.add('clickOnAllEmployeesFromPannel', () => {
    cy.contains(allEmployeesPannelText).should('exist').and('be.visible').click()
})

Cypress.Commands.add('clickOnAddEmployeeButton', () => {
    cy.contains(addEmployeeButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('enterFirstNameAndLastname', (firstName, lastName, employeeeID) => {
    cy.get(firstNameInputField).should('exist').and('be.visible').clear().type(firstName)
    cy.get(lastNameInputField).should('exist').and('be.visible').clear().type(lastName)
    cy.get(employeeeIDInputField).should('exist').and('be.visible').clear().type(employeeeID)
})

Cypress.Commands.add('enterEmailAndPassword', (email, password) => {
    cy.get(emailInputField).should('exist').and('be.visible').clear().type(email)
    cy.get(passwordInputField).should('exist').and('be.visible').clear().type(password)
})

Cypress.Commands.add('selectRole', (role) => {
    cy.get(roleDropDown).select(role).should('have.value', role)
})

Cypress.Commands.add('enterDobAndJoiningDate', (DobDob, joining) => {
    cy.get(dob).should('exist').clear().type(DobDob)
    cy.get(joiningDate).should('exist').clear().type(joining)
})

Cypress.Commands.add('enterQualificationsAndDepartment', (qualifications, depertment) => {
    cy.get(qualificationsInputField).should('exist').and('be.visible').clear().type(qualifications)
    cy.get(depertmentInputField).should('exist').and('be.visible').clear().type(depertment)
})

Cypress.Commands.add('enterGenderAndBloodGroup', (gender, bloodGroup) => {
    cy.get(genderDropDown).select(gender).should('have.value', gender)
    cy.get(bloodGroupDropDown).select(bloodGroup).should('have.value', bloodGroup)
})

Cypress.Commands.add('enterMobileNumberAndDesination', (mobileNumber, designation) => {
    cy.get(mobileNumberInputField).should('exist').and('be.visible').clear().type(mobileNumber)
    cy.get(designationInputField).should('exist').and('be.visible').clear().type(designation)
})

Cypress.Commands.add('enterSalaryAndlocation', (salary, location) => {
    cy.get(salaryInputField).should('exist').and('be.visible').clear().type(salary)
    cy.get(locationInputField).should('exist').and('be.visible').clear().type(location)
})

Cypress.Commands.add('selectCertificates', () => {
    cy.contains(certificates).should('exist').and('be.visible').click().then(() => {
        cy.get('.certificates-dropdown.shadow').find(tenth).click()
    })
})

Cypress.Commands.add('clickOnSubmitButton', () => {
    cy.contains(certificates).should('exist').and('be.visible').click()
    cy.contains(submitButton).should('exist').should('be.visible').click('center').then(() => {
        cy.get(SavedSuccessfullyPopUp).should('have.text', 'Saved Successfully', { matchCase: false })
    })
})

Cypress.Commands.add('clickOnImportExcelSheetButton', () => {
    cy.contains(importExcelSheetButton).should('exist').should('be.visible').click()
})

Cypress.Commands.add('clickOnDownloadSampleFile', () => {
    cy.contains(downloadSampleFileLink).should('exist').should('be.visible').click()
})

Cypress.Commands.add('clickOnUploadExcelButton', (fileLocation) => {
    cy.get(uploadExcelButton).selectFile(fileLocation, { force: true })
    cy.contains(submitButtonUploadExcel).should('exist').should('be.visible').click().then(() => {
        cy.contains(dataAlreadyExistsOrExcelFormatisInvalidPopup).should('exist').should('be.visible')
    })
})

Cypress.Commands.add('clickOnExportData', () => {
    cy.contains(exportData).should('exist').should('be.visible').click()
})


