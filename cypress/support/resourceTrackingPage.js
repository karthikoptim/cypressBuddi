const resourceTrackingPanelButton = 'Resource Tracking'
const addResourceButton = 'Add Resource'
const addResourceHeaderText = 'Add Resource'
const idInputField = '[name="employeeId"]'
const allocatedDateField = '[name="allocatedDate"]'
const deviceTypeDropDown = '[name="deviceType"]'
const serialIdInputField = '[name="serialId"]'
const modelIdInputField = '[name="model"]'
const totalAssignedInputField = '[name ="totalAssigned"]'
const submitButton = 'Submit'
const resourceAddedSuccessfullyPopup = 'Resource added Successfully'
const importExcelSheetButton = 'Import Excel Sheet'
const uploadFileHeaderText ='Upload File'
const downloadSampleFileLink = 'Download Sample File'
const uploadExcelButton = 'Upload Excel'
const dataAlreadyExistsOrExcelFormatisInvalidPopup = 'Data already exists or excel format is invalid'
const exportResourceButton = 'Export Resource'

Cypress.Commands.add('clickOnResourceTracking',()=>{
    cy.contains(resourceTrackingPanelButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('addResource', (id,date,deviceType,serialId,model,totalAssigned) => {
    cy.contains(addResourceButton).should('exist').and('be.visible').click()
    cy.contains(addResourceHeaderText).should('exist').and('be.visible')
    cy.get(idInputField).should('exist').and('be.visible').clear().type(id)
    cy.get(allocatedDateField).should('exist').and('be.visible').type(date)
    cy.get(deviceTypeDropDown).should('exist').and('be.visible').select(deviceType)
    cy.get(serialIdInputField).should('exist').and('be.visible').clear().type(serialId)
    cy.get(modelIdInputField).should('exist').and('be.visible').clear().type(model)
    cy.get(totalAssignedInputField).should('exist').and('be.visible').clear().type(totalAssigned)
    cy.contains(submitButton).should('exist').and('be.visible').click().then(()=> {
        cy.contains(resourceAddedSuccessfullyPopup).should('exist').and('be.visible').should('have.text',resourceAddedSuccessfullyPopup)
    })
})

Cypress.Commands.add('clickOnImportExcelSheetFromResourceTracking',()=>{
    cy.contains(importExcelSheetButton).should('exist').and('be.visible').click()
})

Cypress.Commands.add('downloadSampleResourceTrackingFile',()=>{
    cy.contains(uploadFileHeaderText).should('exist').and('be.visible')
    cy.contains(downloadSampleFileLink).should('exist').and('be.visible').click()

})

Cypress.Commands.add('uploadResourceTrackingFile',(fileLocation)=>{
    cy.contains(uploadFileHeaderText).should('exist').and('be.visible')
    cy.contains(uploadExcelButton).should('exist').selectFile(fileLocation, { force: true })
    cy.contains(submitButton).should('exist').should('be.visible').click().then(()=>{
        cy.contains(dataAlreadyExistsOrExcelFormatisInvalidPopup).should('exist')
    })
})

Cypress.Commands.add('exportResource',()=>{
    cy.contains(exportResourceButton).should('exist').and('be.visible').click()
})