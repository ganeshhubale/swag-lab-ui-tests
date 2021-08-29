/// <reference types="Cypress" />

import {
  logInButton,
  usernameInput,
  passwordInput,
  loginErrorAlert,
} from "../views/login.view";
import { productTitle } from "../views/products.view";
import { logInErrorMsg } from "../constants";
import { hopePageTitle } from "../constants";

const hostUrl = Cypress.env("hostUrl");
const username = Cypress.env("username");
const password = Cypress.env("password");

describe("LogIn validation on Swag Labs", () => {
  beforeEach("Visit site", () => {
    cy.visit(hostUrl);
    cy.wait(2000);
  });

  it("Successfull log in", () => {
    cy.get(usernameInput).clear().type(username);
    cy.get(passwordInput).click().focused().clear().type(password);
    cy.get(logInButton).click();

    cy.wait(2000);
    // Asset home page title after login
    cy.get(productTitle).contains(hopePageTitle);
  });

  it("Unsuccessfull log in", () => {
    cy.get(usernameInput).clear().type("testUser");
    cy.get(passwordInput).clear().type("testPass");
    cy.get(logInButton).click();

    cy.wait(1000);
    cy.get(loginErrorAlert).should("contain", logInErrorMsg);
  });
});
