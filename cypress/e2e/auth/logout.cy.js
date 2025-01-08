
const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Authentication scenarios', () => {
    beforeEach(() => {
        cy.visit('/');

    });

    it('Logout from Swag Labs application', () => {
        cy.get("input[id=user-name]").clear().type(username)
        cy.get("input[id=password]").click().focused().clear().type(password)

        cy.get("input[id=login-button]").click()

        // logout from application
        cy.get("button[id=react-burger-menu-btn]").click()
        cy.get("a[id=logout_sidebar_link]").click()

        // Assert successful logout
        cy.get("input[id=login-button]").should("be.visible")
    })

    it('should logout after session expires', () => {
        cy.get("input[id=user-name]").clear().type(username)
        cy.get("input[id=password]").click().focused().clear().type(password)

        cy.get("input[id=login-button]").click()

        // Assert login
        cy.url().should('include', '/inventory');

        // clear cookies
        cy.clearAllCookies()

        // Load the page
        cy.reload({force: true})

        // Assert successful logout on session expiry
        cy.get("input[id=login-button]").should("be.visible")
    })
})