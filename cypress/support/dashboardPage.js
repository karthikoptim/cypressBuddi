const dashboardPanelText = 'Dashboard'
const dashboardSectionHeaderText = 'Dashboard'
const addHolidaysButton = 'Add Holidays'
const addHolidaysSectionHeaderText = 'Add Holidays'
const occasionInputField = '[name="event"]'
const dateInputField = '[name="date"]'
const SubmitButton = 'Submit'
const addEventsButton = 'Add Events'
const addEventsSectionHeaderText = 'Add Events'
const eventInputField = '[name="event"]'
const dateInputFieldInEvents = '[name="date"]'
const SubmitButtonInEvents = 'Submit'
const holidayAddedSuccessfullyPopup = 'Holiday Added Successfully'
const eventAddedSuccessfullyPopup = 'Event Added Successfully'


Cypress.Commands.add('clickOnDashboardPanelText', () => {
    cy.contains(dashboardPanelText).should('exist').should('be.visible').click()
    cy.contains(dashboardSectionHeaderText).should('exist').should('be.visible')
})

Cypress.Commands.add('clickOnAddHolidaysButton', () => {
    cy.contains(addHolidaysButton).should('exist').should('be.visible').click()
    cy.contains(addHolidaysSectionHeaderText).should('exist').should('be.visible')
})

Cypress.Commands.add('addHolidays', (occasion,occasionDate) => {
    cy.get(occasionInputField).should('exist').should('be.visible').clear().type(occasion).should('have.value', occasion)
    cy.get(dateInputField).should('exist').should('be.visible').clear().type(occasionDate).then(()=>{
    cy.contains(SubmitButton).should('exist').should('be.visible').click()
        cy.contains(holidayAddedSuccessfullyPopup).should('exist').should('be.visible')
    })
})

Cypress.Commands.add('clickOnAddEventsButton', () => {
    cy.contains(addEventsButton).should('exist').should('be.visible').click()
    cy.contains(addEventsSectionHeaderText).should('exist').should('be.visible')
})

Cypress.Commands.add('addEvents', (events,eventsDate) => {
    cy.get(eventInputField).should('exist').should('be.visible').clear().type(events).should('have.value', events)
    cy.get(dateInputFieldInEvents).should('exist').should('be.visible').clear().type(eventsDate)
    cy.contains(SubmitButtonInEvents).should('exist').should('be.visible').click().then(()=>{
        cy.contains(eventAddedSuccessfullyPopup).should('exist',{ timeout: 10000 }).should('be.visible')
    })

})

