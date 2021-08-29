/// <reference types="Cypress" />

import * as loginview from "../integration/views/login.view";
import * as productview from "../integration/views/products.view";
import { hopePageTitle } from "../integration/constants";

const hostUrl = Cypress.env("hostUrl");
const username = Cypress.env("username");
const password = Cypress.env("password");

export function login(): void {
  cy.visit(hostUrl);
  cy.get(loginview.usernameInput).clear().type(username);
  cy.get(loginview.passwordInput).clear().type(password);
  cy.get(loginview.logInButton).click();

  cy.wait(1000);
  cy.get(productview.productTitle).should("contain", hopePageTitle);
}
