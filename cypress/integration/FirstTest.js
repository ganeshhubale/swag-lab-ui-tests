/// <reference  types="Cypress" />

context("Window", () => {
    beforeEach(() => {
        cy.visit("https://scrolltest.com")
    })

    it('Open in mac 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

})