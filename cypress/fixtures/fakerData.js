import { faker } from '@faker-js/faker';

export function randomData() {
    const firstName = faker.person.firstName().replace('-','')
    const lastName = faker.person.lastName().replace('-','') 
    const employeeeID = faker.string.nanoid(10)
    const email = faker.internet.email()
    const password = faker.internet.password()
    const dob = faker.date.birthdate({ min: 21, max: 60, mode: 'age' }).toISOString().split('T')[0]
    const joiningDate = faker.date.past({ years: 10 }).toISOString().split('T')[0]
    const gender = faker.person.sex()
    const mobileNumber = faker.phone.number()
    const designation = faker.person.jobTitle();
    const salary = faker.finance.amount({in: 15000, max: 100000, dec: 0, symbol: '', autoFormat: true});
    const location = faker.location.city().replace("'",'')
    const employeData = [firstName, lastName, employeeeID, email, password, dob, joiningDate, gender, mobileNumber, designation, salary, location]
    return employeData
}

export function adminRandomData() {
    const firstName = faker.person.firstName().replace('-','')
    const lastName = faker.person.lastName().replace('-','') 
    const employeeeID = faker.string.nanoid(10)
    const email = faker.internet.email()
    const password = faker.internet.password()
    const dob = faker.date.birthdate({ min: 21, max: 60, mode: 'age' }).toISOString().split('T')[0]
    const joiningDate = faker.date.past({ years: 10 }).toISOString().split('T')[0]
    const gender = faker.person.sex()
    const mobileNumber = faker.phone.number()
    const designation = faker.person.jobTitle();
    const salary = faker.finance.amount({in: 15000, max: 100000, dec: 0, symbol: '', autoFormat: true});
    const location = faker.location.city().replace("'",'')
    const employeData = [firstName, lastName, employeeeID, email, password, dob, joiningDate, gender, mobileNumber, designation, salary, location]
    return employeData
}