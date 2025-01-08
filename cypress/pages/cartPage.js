class Cart{

    elements = {
        cartBtn: () => cy.get("div[id=shopping_cart_container]")
    }

    removeFromCart(itemNames){
        itemNames.forEach((itemName) => {
            const name = itemName.trim().toLowerCase().replace(/\s+/g, '-');
            cy.get(`button[id='remove-${name}']`).click();
        });
    };
};
module.exports = new Cart();
