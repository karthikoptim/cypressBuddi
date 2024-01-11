const { expect } = require('chai');
const axios = require('axios');

describe('Delete Employee', () => {

  let id = Math.floor(Math.random() * (50000 - 500 + 1)) + 500;
  let idNO = id.toString()
  let email = 'api' + idNO + '@yopmail.com'
  const requestBody = {
    "first_name": "Apihhjb",
    "last_name": "Api",
    "id": idNO,
    "mobile_number": "3214569870",
    "email": email,
    "date_of_birth": "2023-12-06",
    "joining_date": "2023-12-06",
    "qualifications": "cdsvdsvd",
    "designation": "vfdbfdbjdjcjef",
    "department": "dvdvdv",
    "address": "thtrhrhr",
    "blood_group": "A+",
    "gender": "Male",
    "password": "Qwerty@123",
    "role": "Admin",
    "salary": 2000000
  }

  it('should create User', () => {
    cy.log(email)
    cy.request({
      method: 'POST',
      url: 'https://dev-api.urbuddi.com/v1/OW112233/employee',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9wdGltd29ya3NndWVzdEB5b3BtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImVtcGxveWVlX2lkIjoiT1cxMTIyMzMiLCJmaXJzdF9uYW1lIjoiT3B0aW0iLCJsYXN0X25hbWUiOiJXb3JrcyIsInByb2ZpbGVfcGljdHVyZV91cmwiOiJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3czaW1hZ2VzL2F2YXRhcjIucG5nIiwidGVuYW50X2lkIjoiYmVmNTNiZDQtNTVmYi00ZWYwLTkzZjktNTUzZjY0NDgwNWVlIiwicHJpbWFyeV9jb2xvciI6ImRhcmsgb3JhbmciLCJzZWNvbmRhcnlfY29sb3IiOiIjZThlM2UzIiwibG9nb191cmwiOiJodHRwczovL3VyYnVkZGkuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL09wdGltd29ya3NfVGVjaG5vbG9naWVzX1B2dF9MdGQvbG9nb191cmwvbG9nb191cmxfMjAyMzEyMDYwNjA1MjRwbmcifQ.SQ3QtOq9J3g4Aoi_28cxpq38wiyKODbX2V_6lK0VSkg',
        'Content-Type': 'application/json',
        'Tenantid': 'bef53bd4-55fb-4ef0-93f9-553f644805ee'
      },
      body: requestBody
    }).then((response) => {
      expect(response.status).to.equal(200)
      if (response.body.errors) {
        response.body.errors.forEach((error, index) => {
          cy.log(`Error ${index + 1}: ${error.message}`)
        })
      } else {
        expect(response.body.message).to.equal('success');
      }
    })
  })


  it('should delete user', () => {
    const requestBody = {
      employee_id: idNO
    }
    cy.request({
      method: 'DELETE',
      url: 'https://dev-api.urbuddi.com/v1/OW112233/employee',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9wdGltd29ya3NndWVzdEB5b3BtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImVtcGxveWVlX2lkIjoiT1cxMTIyMzMiLCJmaXJzdF9uYW1lIjoiT3B0aW0iLCJsYXN0X25hbWUiOiJXb3JrcyIsInByb2ZpbGVfcGljdHVyZV91cmwiOiJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3czaW1hZ2VzL2F2YXRhcjIucG5nIiwidGVuYW50X2lkIjoiYmVmNTNiZDQtNTVmYi00ZWYwLTkzZjktNTUzZjY0NDgwNWVlIiwicHJpbWFyeV9jb2xvciI6ImRhcmsgb3JhbmciLCJzZWNvbmRhcnlfY29sb3IiOiIjZThlM2UzIiwibG9nb191cmwiOiJodHRwczovL3VyYnVkZGkuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL09wdGltd29ya3NfVGVjaG5vbG9naWVzX1B2dF9MdGQvbG9nb191cmwvbG9nb191cmxfMjAyMzEyMDYwNjA1MjRwbmcifQ.SQ3QtOq9J3g4Aoi_28cxpq38wiyKODbX2V_6lK0VSkg',
        'Content-Type': 'application/json',
        'Tenantid': 'bef53bd4-55fb-4ef0-93f9-553f644805ee'
      },
      body: requestBody
    })
      .then((response) => {
        expect(response.status).to.be.eq(200)
      })
  })

  it('should login to the application ', () => {
    cy.request({
      method: 'POST',
      url: 'https://dev-api.urbuddi.com/v1/authentication',
      body: {
        email: 'api22062@yopmail.com',
        password: 'Qwerty@123',
        device_token: '',
        domain_name: 'optimworks'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      const responseBody = response.body
      const token = responseBody.token
      expect(response.status).to.eq(200)
      cy.wrap(token).as('tokens')
      cy.log(token)
    })
  })

})