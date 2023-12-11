import * as dataUtils from '../../fixtures/fakerData'
import employeeDatas from '../../fixtures/addEmployeeData.json'

describe('all employess', () => {
    let loginTestData, employeeData;
    let adminEmployeeData, id, adminID;

    before(() => {
        cy.fixture('loginData').then((user) => {
            loginTestData = user;
        })
        employeeData = dataUtils.randomData()
        adminEmployeeData = dataUtils.adminRandomData()
        id = Math.floor(Math.random() * 100000) + 100;
        adminID = Math.floor(Math.random() * 100000) + 100;
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
        cy.logoutFromApplication().then(()=>{
            cy.verifyLoginPageIsDisplayed()
        })
        
    })

    it('add employee as admin', () => {
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnAddEmployeeButton()
        cy.enterFirstNameAndLastname(employeeData[0], employeeData[1], id)
        cy.enterEmailAndPassword(employeeData[3], employeeData[4],)
        cy.selectRole(employeeDatas.role)
        cy.enterDobAndJoiningDate(employeeData[5], employeeData[6])
        cy.enterQualificationsAndDepartment(employeeDatas.qualifications, employeeDatas.depertment)
        cy.enterGenderAndBloodGroup(employeeDatas.gender, employeeDatas.bloodGroup)
        cy.enterMobileNumberAndDesination(employeeDatas.mobileNumber, employeeData[9])
        cy.enterSalaryAndlocation(employeeData[10], employeeData[11])
       // cy.selectCertificates()
        cy.clickOnSubmitButton()
    })

    it('login with created employee as admin', () => {
        cy.verifyHomePageIsDisplayed()
        cy.clickOnAllEmployeesFromPannel()
        cy.clickOnAddEmployeeButton()
        cy.enterFirstNameAndLastname(adminEmployeeData[0], adminEmployeeData[1], adminID)
        cy.enterEmailAndPassword(adminEmployeeData[3], adminEmployeeData[4])
        cy.selectRole(employeeDatas.role)
        cy.enterDobAndJoiningDate(adminEmployeeData[5], adminEmployeeData[6])
        cy.enterQualificationsAndDepartment(employeeDatas.qualifications, employeeDatas.depertment)
        cy.enterGenderAndBloodGroup(employeeDatas.gender, employeeDatas.bloodGroup)
        cy.enterMobileNumberAndDesination(employeeDatas.mobileNumber, adminEmployeeData[9])
        cy.enterSalaryAndlocation(adminEmployeeData[10], adminEmployeeData[11])
       // cy.selectCertificates()
        cy.clickOnSubmitButton()
        cy.logoutFromApplication()
        cy.verifyLoginPageIsDisplayed()
        cy.enterLoginDetails(adminEmployeeData[3], adminEmployeeData[4])
        cy.clickOnLoginButton()
        cy.verifyHomePageIsDisplayed()
    })
}) 