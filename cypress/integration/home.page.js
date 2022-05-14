/// <reference types="Cypress"/>

it("user visit my page", () => {

    cy.visit("/")

})

it("user open new tab when click at season videos ", () => {

    cy.visit("/")
    cy.get('#season__1').click()
    
})

it("navbar change classes when scrolling", () => {

    cy.visit("/")
    cy.scrollTo(0, 500)
    cy.get('navigation-bar').should("have.class", "sticky")

})

     