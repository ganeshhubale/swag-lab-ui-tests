const inventoryPage = require("../../pages/inventoryPage")

describe("Sort product items", () => {
    beforeEach("login", () => {
        cy.login()
    });

    afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("Verify sort items by Name: A-Z", () => {
        // Sort by name: A to Z
        inventoryPage.sort_by_name("az")

        // Confirm item list is not empty
        cy.get("div[data-test=inventory-item-name]").should("have.length.greaterThan", 0);

        // List the product names
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const itemNames = [...items].map((item) => item.textContent.trim())
            
            // Verify names are sorted in ascending order
            const sortedNames = [...itemNames].sort();
            expect(itemNames).to.deep.equal(sortedNames);
        });
    });

    it("Verify sort items by Name: Z-A", () => {
        inventoryPage.sort_by_name("za")

        // Confirm item list is not empty
        cy.get("div[data-test=inventory-item-name]").should("have.length.greaterThan", 0);

        // List the product names
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const itemNames = [...items].map((item) => item.textContent.trim())
            
            // Verify names are sorted in descending order
            const sortedNames = [...itemNames].sort((a,b) => b.localeCompare(a));
            expect(itemNames).to.deep.equal(sortedNames);
        });
    });

    it("Verify sort items by price: low to high", () => {
        inventoryPage.sort_by_price("lohi")

        // Confirm item prices list not empty
        cy.get("div[data-test=inventory-item-price]").should("have.length.greaterThan", 0);

        // List the item prices
        cy.get("div[data-test=inventory-item-price]").then((prices) => {
            const itemPrices = [...prices].map((price) => parseFloat(price.textContent.replace("$", "").trim()));
            
            // Verify item prices sorted in ascending order
            const sortedPrices = [...itemPrices].sort((a, b) => a - b);;
            expect(itemPrices).to.deep.equal(sortedPrices);
        });
    });

    it("Verify sort items by price: high to low", () => {
        inventoryPage.sort_by_price("hilo")

        // Confirm item prices list not empty
        cy.get("div[data-test=inventory-item-price]").should("have.length.greaterThan", 0);

        // List the item prices
        cy.get("div[data-test=inventory-item-price]").then((prices) => {
            const itemPrices = [...prices].map((price) => parseFloat(price.textContent.replace("$", "").trim()));
            
            // Verify item prices sorted in descending order
            const sortedPrices = [...itemPrices].sort((a, b) => b - a);
            expect(itemPrices).to.deep.equal(sortedPrices);
        });
    });
});