class Inventory {
  elements = {
    itemName: () => cy.get("div[data-test=inventory-item-name]"),
    sortOptions: () => cy.get("select[data-test=product-sort-container]"),
    addToCart: () => cy.get("button[id=add-to-cart]"),
    cartBtn: () => cy.get("div[id=shopping_cart_container]"),
  };

  sort_by_name(type) {
    this.elements.sortOptions().select(type);
  }

  sort_by_price(type) {
    this.elements.sortOptions().select(type);
  }

  addSingleItem(name) {
    // Click on item
    this.elements.itemName().contains(name).click();

    // Add to card
    this.elements.addToCart().click();
  }

  addMultipleItems(itemNames) {
    itemNames.forEach((itemName) => {
      const name = itemName.trim().toLowerCase().replace(/\s+/g, "-");
      cy.get(`button[id='add-to-cart-${name}']`).click();
    });
  }

  goToCart() {
    // Click on cart button
    this.elements.cartBtn().click();
  }
}
module.exports = new Inventory();
