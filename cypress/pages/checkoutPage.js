class checkout{
    
    elements = {
        firstNameInput: () => cy.get("input[id=first-name]"),
        lastNameInput: () => cy.get("input[id=last-name]"),
        zipCodeInput: () => cy.get("input[id=postal-code]"),
        cancelBtn: () => cy.get("button[id=cancel]"),
        continueBtn: () => cy.get("input[id=continue]"),
        finishBtn: () => cy.get("button[id=finish]"),
    }

    fillUserInfo(firstName, lastName, zipCode){
        this.elements.firstNameInput().clear().type(firstName);
        this.elements.lastNameInput().clear().type(lastName);
        this.elements.zipCodeInput().clear().type(zipCode);
    };

    cancelCheckout(){
        this.elements.cancelBtn().click();
    }

    continue(){
        this.elements.continueBtn().click();
    }

    finish(){
        this.elements.finishBtn().click();
    }

};
module.exports = new checkout();