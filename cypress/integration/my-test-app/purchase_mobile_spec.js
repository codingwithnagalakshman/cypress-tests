/// <reference types="cypress" />

describe('purchase mobile', () => {

    beforeEach( () => {
        cy.visit('/');
    })
    it('visit e-commerce page', () => {
        cy.get('ul.nav.navbar-nav > li > a').eq(1).click();
        cy.url().should('contain','shop');
    })

    it('Search with Ca', () => {
        cy.get('ul.nav.navbar-nav > li > a').eq(1).click();
        cy.get('input[type="text"]').type('ca');
        cy.get('.thumbnail').should('have.length', 5);
    })


})