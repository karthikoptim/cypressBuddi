const expenditurePanelText = 'Expenditure'
const uploadBillButton = 'Upload Bill'
const addExpenditureHeaderText = 'Add Expenditure'
const expenditureTypeDropdown = '[name="expenditureType"]'
const descriptionInputField = '[name="description"]'
const dateInputField = '[name="date"]'
const amountInputField = '[name="amount"]'
const maxSizeText = '[Max Size 1MB]'
const uploadBillsButton = '#uploadBills'
const submitBillButton = 'Submit Bill'
const billUploadedSuccessfullyPopup = 'Bill Uploaded Successfully'
const downloadFiles = 'Download Files'

Cypress.Commands.add('clickOnExpenditureFromPanel', () => {
    cy.contains(expenditurePanelText).should('exist').should('be.visible').click()
})

Cypress.Commands.add('clickOnUploadBill', () => {
    cy.contains(uploadBillButton).should('exist').should('be.visible').click()
})

Cypress.Commands.add('verifyAddExpenditureHeaderTextIsDisplayed', () => {
    cy.contains(addExpenditureHeaderText).should('exist').and('be.visible').and('have.text', addExpenditureHeaderText)
})

Cypress.Commands.add('uploadBill', (expenditureType, description, date, amount) => {
    cy.get(expenditureTypeDropdown).should('exist').should('be.visible').select(expenditureType).should('have.value', expenditureType)
    cy.get(descriptionInputField).should('exist').should('be.visible').type(description)
    cy.get(dateInputField).should('exist').should('be.visible').clear().type(date)
    cy.get(amountInputField).should('exist').should('be.visible').clear().type(amount)
    cy.get(uploadBillsButton).selectFile('cypress/fixtures/translated_image_en.png', { force: true }).then(() => {
        cy.contains(submitBillButton).click().then(()=>{
            cy.contains(billUploadedSuccessfullyPopup).should('exist').should('be.visible').should('have.text',billUploadedSuccessfullyPopup)
        })
    })
})

Cypress.Commands.add('clickOnDownloadFiles', () => {
    cy.contains(downloadFiles).should('exist').should('be.visible').click()
})
