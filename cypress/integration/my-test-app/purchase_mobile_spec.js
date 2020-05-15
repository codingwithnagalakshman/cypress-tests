/// <reference types="cypress" />

describe('purchase mobile', () => {

    beforeEach( () => {
        cy.visit('/');
    })
    it('visit e-commerce page', () => {
        cy.get('ul.nav.navbar-nav > li > a').eq(1).click();
        cy.url().should('contain','shop');
    })


})