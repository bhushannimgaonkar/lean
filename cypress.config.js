const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3q31f4',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    pageLoadTimeout : 120000,
    defaultCommandTimeout : 20000,
    viewportHeight:1080,
    viewportWidth:1920 ,  
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
