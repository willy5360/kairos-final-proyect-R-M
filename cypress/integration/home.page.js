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


it("banner get the class active while scrolling to its position", () => {
    cy.visit("/")
    cy.scrollTo("bottom")
    cy.get(':nth-child(2) > .banner__container > .banner__title').should("have.class", "active")
})

it("banner subtitle should shake on hover", () => {
    cy.visit("/")
    cy.get(':nth-child(2) > .banner__container > .banner__subtitle').trigger("mouseover")
})

     