const resourceTrackingPanelText = 'Resource Tracking'
const addResourceButton = 'Add Resource'
const addResourceHeaderText = 'Add Resource'
const idInputField = '[name="employeeId"]'
const allocatedDateField = '[name="allocatedDate"]'
const deviceTypeDropDown = '[name="deviceType"]'
const serialIdInputField = '[name="serialId"]'
const modelIdInputField = '[name="model"]'
const totalAssignedInputField = '[name ="totalAssigned"]'
const SubmitButton = 'Submit'

Cypress.Commands.add('addResource', (id,date,deviceType,serialId,model,totalAssigned) => {
    cy.contains(resourceTrackingPanelText).should('exist').and('be.visible').click()
    cy.contains(addResourceButton).should('exist').and('be.visible').click()
    cy.contains(addResourceHeaderText).should('exist').and('be.visible')

    cy.get(idInputField).should('exist').and('be.visible').clear().type(id)
    cy.get(allocatedDateField).should('exist').and('be.visible').type(date)
    cy.get(deviceTypeDropDown).should('exist').and('be.visible').select(deviceType)
    
    cy.get(serialIdInputField).should('exist').and('be.visible').clear().type(serialId)
    cy.get(modelIdInputField).should('exist').and('be.visible').clear().type(model)
    cy.get(totalAssignedInputField).should('exist').and('be.visible').clear().type(totalAssigned)
    cy.contains(SubmitButton).should('exist').and('be.visible').click()
})