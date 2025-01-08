
const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Authentication scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
});

  it('Login to Swag Labs application', () => {
    cy.get("input[id=user-name]").clear().type(username)
    cy.get("input[id=password]").click().focused().clear().type(password)

    cy.get("input[id=login-button]").click()

    // Assert successful login
    cy.url().should('include', '/inventory');
    cy.get("div > a[data-test=shopping-cart-link]").should("be.visible")

  })

  it('should retain session after page reload', () => {
    cy.get("input[id=user-name]").clear().type(username)
    cy.get("input[id=password]").click().focused().clear().type(password)

    cy.get("input[id=login-button]").click()

    // Assert login
    cy.url().should('include', '/inventory');

    // Reload application page
    cy.reload()

    // Assert user still login
    cy.url().should('include', '/inventory');
    cy.get("div > a[data-test=shopping-cart-link]").should("be.visible")
  })

  it('should show error message on empty fields', () => {

    // Click on login button and verify error message for username field
    cy.get("input[id=login-button]").click()

    cy.get("h3[data-test=error]").should("contain", "Epic sadface: Username is required")

    // Insert username and click on login button. Verify error message for password field
    cy.get("input[id=user-name]").clear().type(username)
    cy.get("input[id=login-button]").click()
    cy.get("h3[data-test=error]").should("contain", "Epic sadface: Password is required")
  })

  it('should show error message on wrong username and password values', () => {

    // Assert input fields are empty initially
    // cy.get(usernameField).should('be.empty');
    // cy.get(passwordField).should('be.empty');

    // Enter invalid credentials
    cy.get("input[id=user-name]").clear().type("wrongUser")
    cy.get("input[id=password]").clear().type("wrongPassword")
    cy.get("input[id=login-button]").click()


    const expectedError = "Epic sadface: Username and password do not match any user in this service"
    cy.get("h3[data-test=error]").should("contain", expectedError)
  })
})
