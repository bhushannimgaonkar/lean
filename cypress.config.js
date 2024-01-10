const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3q31f4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
