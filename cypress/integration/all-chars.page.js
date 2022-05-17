/// <reference types="Cypress"/>


it("should be able to visit the page", () => {
    cy.visit("/people")
    
})

it("button prev should be disable when its in the main page", () => {

    cy.visit("/people")
    cy.get('.card-people__buttons > :nth-child(1)').should("be.disabled")
})

it("button prev becomes available when clicked to the next character button", () => {
    cy.visit("/people")
    cy.get('.card-people__buttons > :nth-child(3)').click()
    cy.get('.card-people__buttons > :nth-child(1)').should("be.ok")
})

it("should find the filtered character by name and status", () => {
    cy.visit("/people")
    cy.get('#character-name').type("morty")
    cy.get('#status').select("Unknown")
    cy.get('.form-filter__container > .all-chars__button').click()
    cy.get('#card_811').should("exist")
})

it("should thrown an error on console when there's no match in the name input", () => {
    cy.visit("/people", {
        onBeforeLoad(win){
            cy.stub(win.console, "log").as("consoleLog")
        }
    })
    cy.get('#character-name').type("aaaa")
    cy.get('.form-filter__container > .all-chars__button').click()
    cy.get("@consoleLog").should("have.been.calledWith", "Error")


} )

it("should give us the next characters when 'next' is clicked", () => {
    cy.visit("/people")
    cy.get('.card-people__buttons > :nth-child(3)').click()
    cy.get('#card_21').should("exist")
})

it("button 'up' should scroll to top of the page", () => {
    cy.visit("/people")
    cy.get('.circle').click()
    cy.get('.navbar').should("not.have.class", "sticky")

})

it("button prev should give us the previous characters when clicked", () => {
    cy.visit("/people")
    cy.get('.card-people__buttons > :nth-child(3)').click().click()
    cy.get('.card-people__buttons > :nth-child(1)').click()
    cy.get('#card_30').should("exist")

})