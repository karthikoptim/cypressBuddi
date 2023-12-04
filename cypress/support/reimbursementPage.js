const reimbursementButtonFromPanel = 'Reimbursement'
const applyExtraWorkButton = 'Apply extra work'
const selectDate = '#date'
const selecthoursInputField = '#hour'
const selectYourLeadDropdown = '#lead'
const submitButton = 'Submit'
const extraWorkAppliedSuccessfully = 'Extra work Applied Successfully'



Cypress.Commands.add('clickOnReimbursement', () => {
    cy.contains(reimbursementButtonFromPanel).should('exist').and('be.visible').click()
})

Cypress.Commands.add('clickOnApplyExtrawork', () => {
    cy.contains(applyExtraWorkButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('applyExtraWork',(date,hours)=>{
cy.get(selectDate).should('exist').and('be.visible').clear().type(date).type('{enter}')
cy.get(selecthoursInputField).should('exist').and('be.visible').clear().type(hours)
cy.get(selectYourLeadDropdown).should('exist').and('be.visible').select(1)
cy.contains(submitButton).should('exist').and('be.visible').click().then(()=>{
    cy.contains(extraWorkAppliedSuccessfully).should('exist').and('be.visible').should('have.text',extraWorkAppliedSuccessfully)

})
})