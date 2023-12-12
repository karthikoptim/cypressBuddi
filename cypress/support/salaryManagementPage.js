const salaryManagementButtonFromPanel = 'Salary Management'
const salaryManagementHeaderText = 'Salary Management'
const addIncentiveButton = 'Add Incentive'
const enterempIdInputField = '#empId'
const incentiveAmountInputField = '#incentiveAmount'
const submitButton = 'Submit'
const incentiveAddedSuccessfullyMessage = 'Incentive added successfully'
const generatePayrollButton = 'Generate Payroll'
const payrollDownloadedSuccessfullyPopup = 'Payroll Downloaded Successfully'
const generatePayslipButton = 'Generate Payslip'
const selectMonthToRegeneratePayslip = '#date'
const employeeID = '#employeeId'
const submitButtonInPayslip = 'Submit'
const payslipIsNotGeneratedForTheMonthOfMessage = '.text-danger'
const PayslipRegenerateSuccessfullyPopup = 'Payslip regenerated to OS001 for 2023-08 successfully' 
const importleaveButton = 'Import Leaves'
const uploadFileHeaderText = 'Upload File'
const downloadSampleFile = 'Download Sample File'
const uploadExcelButton = 'Upload Excel'
const dataAlreadyExistsOrExcelFormatIsInvalidMessage = 'Data already exists or excel format is invalid.'

Cypress.Commands.add('clickOnSalaryManagementButtonFromPanel', () => {
    cy.contains(salaryManagementButtonFromPanel).should('exist').and('be.visible').click()
})

Cypress.Commands.add('verifySalaryManagementSectionIsDisplayed', () => {
    cy.contains(salaryManagementHeaderText).should('exist').and('be.visible').and('have.text', salaryManagementHeaderText)
})

Cypress.Commands.add('addIncentive', (empId, incentiveAnount) => {
    cy.contains(addIncentiveButton).should('exist').and('be.visible').click()
    cy.get(enterempIdInputField).should('exist').and('be.visible').clear().type(empId).should('have.value', empId)
    cy.get(incentiveAmountInputField).should('exist').and('be.visible').clear().type(incentiveAnount).should('have.value', incentiveAnount)
    cy.contains(submitButton).should('exist').and('be.visible').click().then(() => {
        cy.contains(incentiveAddedSuccessfullyMessage).should('exist').and('be.visible').and('have.text', incentiveAddedSuccessfullyMessage)
    })
})

Cypress.Commands.add('generatePayroll', () => {
    cy.contains(generatePayrollButton).should('exist').and('be.visible').click()
    cy.contains(payrollDownloadedSuccessfullyPopup).should('exist').and('be.visible').and('have.text', payrollDownloadedSuccessfullyPopup)
})

Cypress.Commands.add('generatePayslip', (month, empId) => {
    cy.contains(generatePayslipButton).should('exist').and('be.visible').click()
    cy.get(selectMonthToRegeneratePayslip).should('exist').and('be.visible').clear().type(month).type('{enter}')
    cy.get(employeeID).should('exist').and('be.visible').clear().type(empId)
    cy.contains(submitButtonInPayslip).should('exist').and('be.visible').click()
    cy.get(payslipIsNotGeneratedForTheMonthOfMessage).should('exist').and('be.visible')
})

Cypress.Commands.add('importLeaves', () => {
    cy.contains(importleaveButton).should('exist').and('be.visible').click()
    cy.contains(uploadFileHeaderText).should('exist').and('be.visible').should('have.text',uploadFileHeaderText)
})

Cypress.Commands.add('downloadLeaveSampleFile',()=>{
    cy.contains(downloadSampleFile).should('exist').and('be.visible').click()
})

Cypress.Commands.add('uploadInvalidFormatOfLeavesExcelFile',(fileLocation)=>{
    cy.contains(uploadExcelButton).should('exist').and('be.visible').selectFile(fileLocation)
    cy.contains(submitButton).should('exist').and('be.visible').click()
})