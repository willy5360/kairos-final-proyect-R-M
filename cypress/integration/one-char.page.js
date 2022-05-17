/// <reference types="Cypress"/>

it("should be able to visit the page", () => {
    cy.visit("/character");
});

it("should appear 'Rick Sanchez' as default character on the page", () => {
    cy.visit("/character");
    cy.get(".card__oneChar-info > h1").contains("Rick Sanchez");
});

it("clicking the card should return a random character info", () => {
    cy.visit("/character");
    cy.get(".card__oneChar-container").click();
});

it("status character should match its class", () => {

    cy.visit("/character");
    cy.get(".card__oneChar-container").click();
    cy.wait(1000)
    cy.get(".card__status").then($characterCard => {
        if($characterCard.hasClass("Alive")){
            cy.get(".card__status").contains("ALIVE")
        } else if($characterCard.hasClass("unknown")) {
            cy.get(".card__status").contains("UNKNOWN")
        } else {
            cy.get(".card__status").contains("DEAD")
        }
    })
});
