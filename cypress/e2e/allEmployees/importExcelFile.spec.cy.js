describe('import file upload', () => {
    const file = 'cypress/fixtures/employee_details (7).xlsx'
    let loginTestData
    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    it('download sample file',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnDownloadSampleFile()
    })

    it('upload invalid format of employee details excel file', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnUploadExcelButton(file)
    })

    it('export data',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnExportData()
    })
})