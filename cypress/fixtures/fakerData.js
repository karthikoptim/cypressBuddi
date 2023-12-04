import { faker } from '@faker-js/faker';

export function randomData() {
    const firstName = faker.person.firstName().replace('-','')
    const lastName = faker.person.lastName().replace('-','') 
    const employeeeID = faker.string.nanoid(10)
    const email = faker.internet.email()
    const password = faker.internet.password()
    const bday = faker.date.birthdate({ min: 21, max: 60, mode: 'age' })
    const dob = bday.toISOString().split('T')[0]
    const tdate =   faker.date.past({ years: 10 })
    const joiningDate = tdate.toISOString().split('T')[0]
    const gender = faker.person.sex()
    const mobileNumber = faker.phone.number()
    const designation = faker.person.jobTitle();
    const salary = faker.finance.amount({in: 15000, max: 100000, dec: 0, symbol: '', autoFormat: true});
    const location = faker.location.city();
    const employeData = [firstName, lastName, employeeeID, email, password, dob, joiningDate, gender, mobileNumber, designation, salary, location]
    const descriptions = faker.lorem.paragraphs(1)
    return employeData

}
