import salaryData from '../../fixtures/salaryManagementData.json'

describe('Salary Management', () => {
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

    it('should add incentive', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.addIncentive(salaryData.employeeId, salaryData.enterAmout)
    })

    it('should generate payroll', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.generatePayroll()
    })

    it('should generate payslip', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.generatePayslip(salaryData.monthToRegeneratePayslip,salaryData.employeeId)
    })

    it('should download leave sample file', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.importLeaves()
        cy.downloadLeaveSampleFile()
    })

    it('should upload invalid format of leaves excelFile', () => {
        cy.clickOnSalaryManagementButtonFromPanel()
        cy.importLeaves()
        cy.uploadInvalidFormatOfLeavesExcelFile(salaryData.file)
    })

})