const inventory = require("../../pages/inventoryPage");
const cart = require("../../pages/cartPage");
const items = require("../../fixtures/items.json");
const users = require("../../fixtures/users.json");
const checkout = require("../../pages/checkoutPage");

describe("Checkout Functionality", () => {
    beforeEach("login", ()=> {
        cy.login();
    });

    afterEach("cleanUp", ()=> {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("Proceed to Checkout", ()=>{
        // List of items to be added to cart
        const itemNames = Object.values(items).map(item => item.name);

        // Add items to cart
        inventory.addMultipleItems(itemNames);

        // Go to cart
        inventory.goToCart();

        // Checkout cart
        cart.checkoutCart();

        // Enter information
        checkout.fillUserInfo(users.user.firstName, users.user.lastName, users.user.zipCode);

        // Continue checkout
        checkout.continue();

        // Verify checkout overiview page
        cy.get("span[data-test=title]").should("contain", "Checkout: Overview");

        // Verify product items selected in cart
        cy.get("div[data-test=inventory-item-name]").then((items) => {
            const itemNamesCheckout = [...items].map((item) => item.textContent.trim())
            
            expect(itemNamesCheckout).to.deep.equal(itemNames);
        });
    });

    it("Complete a Purchase", ()=>{
        // List of items to be added to cart
        const itemNames = Object.values(items).map(item => item.name);

        // Add items to cart
        inventory.addMultipleItems(itemNames);

        // Go to cart
        inventory.goToCart();

        // Checkout cart
        cart.checkoutCart();

        // Enter information
        checkout.fillUserInfo(users.user.firstName, users.user.lastName, users.user.zipCode);

        // Continue checkout
        checkout.continue();

        // Finish the checkout
        checkout.finish();

        // Verify checkout complete message
        cy.get("h2[data-test=complete-header]").should("contain", "Thank you for your order!");
        const completeMsg = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        cy.get("div[data-test=complete-text]").should("contain", completeMsg);

        // Verify cart is empty now
        inventory.goToCart();
        cy.get("div[data-test=inventory-item-name]").should("not.exist");
    });

    it("Verify Checkout Validation Messages", ()=>{
        // List of items to be added to cart
        const itemNames = Object.values(items).map(item => item.name);

        // Add items to cart
        inventory.addMultipleItems(itemNames);

        // Go to cart
        inventory.goToCart();

        // Checkout cart
        cart.checkoutCart();


        // Leave user information fields empty and Continue checkout
        checkout.continue();

        // Verify error message
        cy.get("h3[data-test=error]").should("contain", "Error: First Name is required");

        // Enter first name
        checkout.elements.firstNameInput().clear().type(users.user.firstName)
        checkout.continue();
        // Verify error message
        cy.get("h3[data-test=error]").should("contain", "Error: Last Name is required");

        // Enter first name and last name
        checkout.elements.lastNameInput().clear().type(users.user.lastName)
        checkout.continue();
        // Verify error message
        cy.get("h3[data-test=error]").should("contain", "Error: Postal Code is required");
    });

    it("Verify Total Price Calculation", ()=>{
        // List of items to be added to cart
        const itemNames = Object.values(items).map(item => item.name);

        // Add items to cart
        inventory.addMultipleItems(itemNames);

        // Go to cart
        inventory.goToCart();

        // Checkout cart
        cart.checkoutCart();

        // Enter information
        checkout.fillUserInfo(users.user.firstName, users.user.lastName, users.user.zipCode);

        // Continue checkout and go to overivew page
        checkout.continue();

        // Verify the total price matches the sum of item prices plus tax.
        cy.get("div[data-test=inventory-item-price]").then((prices) => {
            const itemPrices = [...prices].map((price) => parseFloat(price.textContent.replace("$", "").trim()));
            let totalBeforeTax = 0
            itemPrices.forEach((price) => {
                totalBeforeTax = totalBeforeTax + price
            });
            let totalAfterTax = (totalBeforeTax*0.08 + totalBeforeTax).toFixed(2)
            cy.get("div[data-test=total-label]").then(($total) => {
                let displayedTotal = parseFloat($total.text().replace("Total: $", "").trim());
                expect(parseFloat(totalAfterTax)).to.deep.equal(displayedTotal);
            });
        });
    });
});