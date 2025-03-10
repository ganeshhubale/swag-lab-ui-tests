const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: process.env.username,
    password: process.env.password,
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
