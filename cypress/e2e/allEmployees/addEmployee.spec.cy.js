import * as dataUtils from '../../fixtures/fakerData.js'
import employeeDatas from '../../fixtures/addEmployeeData.json'

describe('addEmployee', () => {

    let loginTestData, employeeData;
    employeeData = dataUtils.randomData()
    const id = Math.floor(Math.random() * 1000) + 100;

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user;
        })
    })

    it.skip('addEmployeeAsAdmin', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.ClickOnAllEmployeesFromPannel()
        cy.ClickOnAddEmployeeButton()
        cy.enterFirstNameAndLastname(employeeData[0], employeeData[1], id)
        cy.enterEmailAndPassword(employeeData[3], employeeData[4],)
        cy.selectRole(employeeDatas.role)
        cy.enterDobAndJoiningDate(employeeData[5], employeeData[6])
        cy.enterQualificationsAndDepartment(employeeDatas.qualifications, employeeDatas.depertment)
        cy.enterGenderAndBloodGroup(employeeDatas.gender, employeeDatas.bloodGroup)
        cy.enterMobileNumberAndDesination(employeeDatas.mobileNumber, employeeData[9])
        cy.enterSalaryAndlocation(employeeData[10], employeeData[11])
        cy.selectCertificates()
        cy.clickOnSubmitButton()
    })

    it('loginWithCreatedEmployeeAsAdmin', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.verifyUrlIsLaunchedSuccessfully()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(loginTestData.adminMail, loginTestData.adminPassword)
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.ClickOnAllEmployeesFromPannel()
        cy.ClickOnAddEmployeeButton()
        cy.enterFirstNameAndLastname(employeeData[0], employeeData[1], id)
        cy.enterEmailAndPassword(employeeData[3], employeeData[4])
        cy.selectRole(employeeDatas.role)
        cy.enterDobAndJoiningDate(employeeData[5], employeeData[6])
        cy.enterQualificationsAndDepartment(employeeDatas.qualifications, employeeDatas.depertment)
        cy.enterGenderAndBloodGroup(employeeDatas.gender, employeeDatas.bloodGroup)
        cy.enterMobileNumberAndDesination(employeeDatas.mobileNumber, employeeData[9])
        cy.enterSalaryAndlocation(employeeData[10], employeeData[11])
        cy.selectCertificates()
        cy.clickOnSubmitButton()
        cy.logOutFromApplication()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(employeeData[3], employeeData[4])
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
        cy.logOutFromApplication()
        cy.verifyLoginPageIsDisplayed()
    })

}) 