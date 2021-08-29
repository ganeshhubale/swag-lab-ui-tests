/// <reference types="cypress" />

import * as productview from "../views/products.view";
import { login } from "../common";
import { addToCard, removeFromCart } from "../models/products";

describe("Products page validation tests", () => {
  beforeEach("Log in", () => {
    login();
    cy.wait(2000);
  });

  it("Add single product to card", () => {
    addToCard("Sauce Labs Backpack");
    cy.get(productview.cartValue).should("contain", 1);
  });

  it("Add multiple product to card", () => {
    addToCard("Sauce Labs Backpack");
    addToCard("Sauce Labs Bike Light");
    addToCard("Sauce Labs Bolt T-Shirt");
    cy.get(productview.cartValue).should("contain", 3);
  });

  it("Add and remove product to card", () => {
    addToCard("Sauce Labs Backpack");
    addToCard("Sauce Labs Bike Light");
    cy.get(productview.cartValue).should("contain", 2);
    removeFromCart("Sauce Labs Backpack");
    cy.get(productview.cartValue).should("contain", 1);
  });
});
