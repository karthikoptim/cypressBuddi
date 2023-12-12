const emailInputField = '#hrEmail'
const passwordInputField = '#hrPassword'
const loginButton = 'Login'
const urBuddiLogo = '.company-logo'
const welcomeTourBuddiText = 'Welcome to urBuddi'
const notification = '.notification-btn'
const logout = '.logout-btn-nav'

Cypress.Commands.add('verifyUrlIsLaunchedSuccessfully', () => {
    cy.url().should('include', 'login')
    cy.url().should('eq', 'https://dev.urbuddi.com/login')
    cy.url().should('contain', 'dev.urbuddi.com')
})

Cypress.Commands.add('verifyLoginPageIsDisplayed', () => {
    cy.get(urBuddiLogo).should('exist',{ timeout: 10000 }).should('be.visible')
})

Cypress.Commands.add('enterLoginDetails', (email, password) => {
    cy.get(emailInputField).should('exist').should('be.visible').clear().type(email).should('have.value', email)
    cy.get(passwordInputField).should('exist').should('be.visible').clear().type(password).should('have.value', password)
})

Cypress.Commands.add('clickOnLoginButton', () => {
    cy.contains(loginButton).should('exist').should('be.visible').click()
})

Cypress.Commands.add('verifyHomePageIsDisplayed',()=>{
    cy.contains(welcomeTourBuddiText).should('exist').should('be.visible')
    cy.get(notification).should('exist').should('be.visible')
})

Cypress.Commands.add('logoutFromApplication',()=>{
    cy.get(logout).should('exist').should("be.visible").click()
})
