class Inventory{

    elements = {

        sortOptions: () => cy.get("select[data-test=product-sort-container]")
    }

    sort_by_name(type){
        this.elements.sortOptions().select(type);
    }

    sort_by_price(type){
        this.elements.sortOptions().select(type);
    }

}
module.exports = new Inventory();
