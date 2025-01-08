class Cart{

    elements = {
        itemName: () => cy.get("div[data-test=inventory-item-name]"),
        addToCart: () => cy.get("button[id=add-to-cart]"),
        cartBtn: () => cy.get("div[id=shopping_cart_container]")
    }

    addSingleItem(name){
        // Click on item
        this.elements.itemName().contains(name).click();

        // Add to card
        this.elements.addToCart().click()
    };

    addMultipleItems(itemNames){
        itemNames.forEach((itemName) => {
            const name = itemName.trim().toLowerCase().replace(/\s+/g, '-');
            cy.get(`button[id='add-to-cart-${name}']`).click();
        });
    };

    removeFromCart(itemNames){
        itemNames.forEach((itemName) => {
            const name = itemName.trim().toLowerCase().replace(/\s+/g, '-');
            cy.get(`button[id='remove-${name}']`).click();
        });
    };

    goToCart(){
        // Click on cart button
        this.elements.cartBtn().click();
    }
};
module.exports = new Cart();
