const items = require("../../fixtures/items.json");
const cart = require("../../pages/cartPage");

describe("Cart Functionality", () => {

    beforeEach("login", () => {
        cy.login()
    });

    afterEach("CleanUp", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("Add a Single Item to the Cart", () => {
        // Choose item and Click on it. For example - Item name - Sauce Labs Backpack
        const itemName = items.sauceLabsBackpack.name;

        cart.addSingleItem(itemName);

        // Go to cart
        cart.goToCart();

        // Confirm only one item in cart
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const totalItems = [...items].map((item) => item.textContent.trim())

            expect(totalItems.length).to.equal(1);
            expect(totalItems[0]).to.equals(itemName)
        });
    });

    it("Add Multiple Items to the Cart", () => {
        // Add multiple items to cart
        const itemNames = Object.values(items).map(item => item.name);

        cart.addMultipleItems(itemNames);
        
        // Go to cart
        cart.goToCart();

        // Confirm  multiple items added in cart
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const totalItems = [...items].map((item) => item.textContent.trim())

            expect(totalItems.length).to.equal(itemNames.length);
        });
    });

    it("Remove an Item from the Cart", () => {
        // Add multiple items to cart
        const itemNames = Object.values(items).map(item => item.name);

        cart.addMultipleItems(itemNames);
        
        // Go to cart
        cart.goToCart();

        // Remove an item from cart and check count reduced
        cart.removeFromCart([itemNames[0]]);

        // Confirm total count reduced by one
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const totalItems = [...items].map((item) => item.textContent.trim())

            expect(totalItems.length).to.equal(itemNames.length-1);
        });
    });

    it("Empty the Cart", () => {
        // Add multiple items to cart
        const itemNames = Object.values(items).map(item => item.name);

        cart.addMultipleItems(itemNames);
        
        // Go to cart
        cart.goToCart();

        // Remove an item from cart and check count reduced
        cart.removeFromCart(itemNames);
        
        // Confirm the cart is empty
        cy.get("div[data-test=inventory-item-name]").should("not.exist");
    });

    it("Verify Cart Persistence", () => {
        // Add multiple items to cart
        const itemNames = Object.values(items).map(item => item.name);

        cart.addMultipleItems(itemNames);

        // Reload the inventory
        cy.reload();

        // Go to cart
        cart.goToCart();

        // Confirm total count of items is equal to total items in cart
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const totalItems = [...items].map((item) => item.textContent.trim())

            expect(totalItems.length).to.equal(itemNames.length);
        });
    });
});