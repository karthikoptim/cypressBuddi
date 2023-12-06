const policiesButtonFromPanel = 'Policies'
const addPolicyButtonFromPanel = 'Add Policy'
const policyFormHeaderText = 'Policy form'
const policyNameInputField = '[id="policy name"]'
const uploadPolicyButton = '[id="excel"]'
const SubmitButton = 'Submit'
const errorText = 'Error'

Cypress.Commands.add('clickOnPoliciesButtonFromPanel', () => {
    cy.contains(policiesButtonFromPanel).should('exist').and('be.visible').click()
})

Cypress.Commands.add('verifySalaryManagementSectionIsDisplayed', (policyName, filePath) => {
    cy.contains(addPolicyButtonFromPanel).should('exist').and('be.visible').click()
    cy.contains(policyFormHeaderText).should('exist').and('be.visible').and('have.text', policyFormHeaderText)
    cy.get(policyNameInputField).should('exist').and('be.visible').clear().type(policyName).should('have.value', policyName)
    cy.get(uploadPolicyButton).should('exist').selectFile(filePath, { force: true })
    cy.contains(SubmitButton).should('exist').and('be.visible').click()
    cy.contains(errorText).should('exist').and('be.visible').and('contain', errorText)

})