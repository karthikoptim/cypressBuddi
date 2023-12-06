import salarydata from '../../fixtures/salaryManagementData.json'

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

    it('add incentive', () => {
        cy.clickOnsalaryManagementButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed()
        cy.addIncentive(salarydata.employeeId, salarydata.enterAmout)
    })

    it('generate payroll', () => {
        cy.clickOnsalaryManagementButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed()
        cy.generatePayroll()
    })

    it('generate payslip', () => {
        cy.clickOnsalaryManagementButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed()
        cy.generatePayslip(salarydata.monthToRegeneratePayslip,salarydata.employeeId)
    })

    it('download leave sample file', () => {
        cy.clickOnsalaryManagementButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed()
        cy.importleaves()
        cy.downloadLeaveSampleFile()
    })

    it('upload nnvalid foramrt of leaves excelFile', () => {
        cy.clickOnsalaryManagementButtonFromPanel()
        cy.verifySalaryManagementSectionIsDisplayed()
        cy.importleaves()
        cy.uploadInvalidForamrtOfLeavesExcelFile(salarydata.file)
    })

})