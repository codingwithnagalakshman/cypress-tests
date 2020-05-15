/// <reference types="Cypress" />

describe('verify home page', () => {
    beforeEach( () => {
        cy.visit('/');
    })
    
    it('verify menu links in home page', () => {
        cy.get('ul.nav.navbar-nav > li > a').each( ($ele, index, $elemList) => {
            expect($ele.text()).to.be.oneOf(['Home','E-Commerce','Sign Up','Sign In','Contact Us', 'Common Elements','']);
        }).then(($elemList) => {
            expect($elemList).to.have.length(7);
        });
       
    })

    it('verify Content in home page', () => {
        cy.get('h1').contains('Hello, Welcome to Techbrothers99!');
        cy.get('.jumbotron > p').eq(0).should('contain','#Keep Learning');
        cy.get('.jumbotron > p').eq(1).should('contain','#Practice web application for Selenium, Cucumber and Cypress');
        cy.get('.jumbotron > p').eq(2).should('contain','Note: We will not save any information that you are providing in the application.');
    })

    it('verify active class on home page', () => {
        cy.get('ul.nav.navbar-nav > li').eq(0).should('have.text', 'Home').should('have.class','active');
        cy.get('ul.nav.navbar-nav > li').eq(1).should('not.have.class','active');
    })

    it('verify click on Home link', () => {
        cy.get('ul.nav.navbar-nav > li > a').eq(0).click();
        cy.url().should('contain','testingwithtechbrothers99.com')
    })

})