const reimbursementPanelText = 'Reimbursement'
const applyExtraEorkButton = 'Apply extra work'
const selectDate = '#date'
const selecthoursInputField = '#hour'
const selectYourLeadDropdown = '#lead'
const submitButton = 'Submit'

Cypress.Commands.add('applyExtraWork',(date,hours)=>{
cy.contains(reimbursementPanelText).should('exist').and('be.visible').click()
cy.contains(applyExtraEorkButton).should('exist').and('be.visible').click()
cy.get(selectDate).should('exist').and('be.visible').clear().type(date).type('{enter}')
cy.get(selecthoursInputField).should('exist').and('be.visible').clear().type(hours)
cy.get(selectYourLeadDropdown).should('exist').and('be.visible').select(1)
cy.contains(submitButton).should('exist').and('be.visible').click()

})