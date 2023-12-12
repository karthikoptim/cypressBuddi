import salaryData from '../../fixtures/salaryManagementData.json'

describe('salary management', () => {
    let loginTestData;

    before(() => {
        cy.fixture('loginData').then((data) => {
            loginTestData = data
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })

    afterEach(() => {
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })

    it('add incentive', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.addIncentive(salaryData.employeeId, salaryData.enterAmout)
    })

    it('generate payroll', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.generatePayroll()
    })

    it('generate payslip', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.generatePayslip(salaryData.monthToRegeneratePayslip,salaryData.employeeId)
    })

    it('download leave sample file', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.importLeaves()
        cy.downloadLeaveSampleFile()
    })

    it('upload invalid foramrt of leaves excelFile', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.importLeaves()
        cy.uploadInvalidForamrtOfLeavesExcelFile(salaryData.file)
    })

})