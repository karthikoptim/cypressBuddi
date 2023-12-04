describe('importFileUpload', () => {
    const file = 'cypress/fixtures/employee_details (7).xlsx'
    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it('downloadSampleFile',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.ClickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnDownloadSampleFile()
    })

    it('uploadInvalidFormatExcelFile', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.ClickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnUploadExcelButton(file)
    })

    it('exportData',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.ClickOnAllEmployeesFromPannel()
        cy.clickOnExportData()
    })

})