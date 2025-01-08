describe("Authentication scenarios", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Logout from Swag Labs application", () => {
    // logout from application
    cy.get("button[id=react-burger-menu-btn]").click();
    cy.get("a[id=logout_sidebar_link]").click();

    // Assert successful logout
    cy.get("input[id=login-button]").should("be.visible");
  });

  it("should logout after session expires", () => {
    // clear cookies
    cy.clearAllCookies();

    // Load the page
    cy.reload({ force: true });

    // Assert successful logout on session expiry
    cy.get("input[id=login-button]").should("be.visible");
  });
});
