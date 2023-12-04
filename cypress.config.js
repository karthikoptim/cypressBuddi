const { defineConfig } = require("cypress");

module.exports = defineConfig({



  "env": {
    baseUrl : 'https://dev.urbuddi.com/login'
  },

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },



});
