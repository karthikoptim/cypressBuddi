const leaveManagementButtonFromPannel = 'Leave Management'
const applyLeaveButton = 'Apply Leave'
const selectDatesInputField = '#dateRange'
const selectYourLeadDropdown = '#hr'
const reasonforRequestInputField = '#reason'
const leaveRadioButton = '#leave'
const workFromHomeRadioButton = '#workFromHome'
const submitButton = 'Submit'

Cypress.Commands.add('clickOnLeaveManagementButton', () => {
    cypress.contains(leaveManagementButtonFromPannel).and('exist').should('be.visible').click()
})

Cypress.Commands.add('clickOnApplyLeaveButton', () => {
    cypress.contains(applyLeaveButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('enterTheLeaveDetails', (date,reasonforRequest) => {
cy.get(selectDatesInputField).should('exist').and('be.visible').clear().type(date).should('exist').and('be.visible').type(date)
cy.get(selectDatesInputField).should('exist').and('be.visible').select(1)
cy.get(selectDatesInputField).should('exist').and('be.visible').clear().type(reasonforRequest)
})

Cypress.Commands.add('clickOnWorkFromHomeRadioButton', () => {
    cypress.get(workFromHomeRadioButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('clickOnLeaveRadioButton', () => {
    cypress.get(leaveRadioButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('clickOnSubmitButton', () => {
    cypress.contains(submitButton).should('exist').and('be.visible').click()
})
