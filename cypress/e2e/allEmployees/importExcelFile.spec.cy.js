import employeeData from '../../fixtures/addEmployeeData.json'

describe('import file upload', () => {
    let loginTestData;

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user
        })
    })

    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    afterEach(()=>{
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })

    it('download sample file',()=>{
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnDownloadSampleFile()
    })

    it('upload invalid format of employee details excel file', () => {
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnImportExcelSheetButton()
        cy.clickOnUploadExcelButton(employeeData.file)
    })

    it('export data',()=>{
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnExportData()
    })
})