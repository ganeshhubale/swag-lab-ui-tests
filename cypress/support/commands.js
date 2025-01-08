// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login
Cypress.Commands.add("login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  cy.visit("/");
  cy.get("input[id=user-name]").clear().type(username);
  cy.get("input[id=password]").clear().type(password);

  cy.get("input[id=login-button]").click();

  // Verify successful login
  cy.url().should("include", "/inventory");
});
