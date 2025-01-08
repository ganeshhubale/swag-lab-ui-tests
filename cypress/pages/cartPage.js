class Cart {
  elements = {
    cartBtn: () => cy.get("div[id=shopping_cart_container]"),
    checkoutbtn: () => cy.get("button[id=checkout]"),
  };

  removeFromCart(itemNames) {
    itemNames.forEach((itemName) => {
      const name = itemName.trim().toLowerCase().replace(/\s+/g, "-");
      cy.get(`button[id='remove-${name}']`).click();
    });
  }

  checkoutCart() {
    this.elements.checkoutbtn().click();
  }
}
module.exports = new Cart();
