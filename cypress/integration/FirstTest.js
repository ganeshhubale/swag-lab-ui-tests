/// <reference  types="Cypress" />

const url=Cypress.env("url")

context("Window", () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Open in mac 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

})
