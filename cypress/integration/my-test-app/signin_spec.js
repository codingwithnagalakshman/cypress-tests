/// <reference types='cypress' />


describe('signin form', () => {
     beforeEach( () => {
         cy.visit('https://www.testingwithtechbrothers99.com/')
         cy.get('ul.nav.navbar-nav > li > a').eq(3).click();
     })

     it('verify password content', () => {
        cy.get('.alert.alert-info').should('contain','Password must be Techbrothers@12 to sign in.')
     })

     it('verify label and button names', () => {
        cy.get('label[for="inputEmail"]').contains('Email')
        cy.get('label[for="inputPassword"]').contains('Password')
        cy.get('.checkbox > label').contains('Remember me')
        cy.get('button[type="submit"]').should('have.text','Sign in')
     })

     it('successful signin', () => {         
         cy.get('#inputEmail').type('chirukurinagalakshman@gmail.com')
         cy.get("#inputPassword").type('Techbrothers@12')
         cy.get('button[type="submit"]').click()
         cy.url().should('contain','signin-success')
         cy.get('.alert.alert-success').contains('Well done! You successfully completed signin.')
     })

     it('verify submit button status on page load', () => {
        cy.get('button[type="submit"]').should('be.disabled')
     })

     it('signin form validations- email focus out', () => {
        cy.get('#inputEmail').focus().blur()       
        cy.get('#inputEmail').next().should('have.text','Email is required.')
        cy.get("#inputPassword").next().should('not.be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
     })

     it('signin form validations- email and password both focus out', () => {
        cy.get('#inputEmail').focus().blur()       
        cy.get('#inputEmail').next().should('have.text','Email is required.')
        cy.get("#inputPassword").focus().blur()
        cy.get("#inputPassword").next().should('have.text','Password is required.')
        cy.get('button[type="submit"]').should('be.disabled')
     })

     it('signin form validations- password focus out', () => {
        cy.get('#inputEmail').type('chirukurinagalakshamn@gmail.com').should('have.value','chirukurinagalakshamn@gmail.com')
        cy.get("#inputPassword").focus().blur()
        cy.get("#inputPassword").next().should('have.text','Password is required.')
        cy.get('button[type="submit"]').should('be.disabled')
     })

     it('signin form validations- verify button status after entering values', () => {
        cy.get('#inputEmail').type('chirukurinagalakshamn@gmail.com').should('have.value','chirukurinagalakshamn@gmail.com')
        cy.get("#inputPassword").type('1234566789')
        cy.get('button[type="submit"]').should('be.enabled')
     })

     it('signin form validations- invalid password', () => {
        cy.get('#inputEmail').type('chirukurinagalakshamn@gmail.com').should('have.value','chirukurinagalakshamn@gmail.com')
        cy.get("#inputPassword").type('1234566789')
        cy.get('button[type="submit"]').click()
        cy.get("#inputPassword").next().should('have.text','Please enter a valid password.')
     })

     it('signin form validations- email validations', () => {
        cy.get('#inputEmail').type('chirukuri').blur().next().should('have.text','Please enter a valid email.')
        cy.get('#inputEmail').clear()
        cy.get('#inputEmail').type('chirukuri@').blur().next().should('have.text','Please enter a valid email.')
        cy.get('#inputEmail').clear()
        cy.get('#inputEmail').type('chirukuri@tech.').blur().next().should('have.text','Please enter a valid email.')
        cy.get('#inputEmail').clear()
        cy.get('#inputEmail').type('_@tech.').blur().next().should('have.text','Please enter a valid email.')
        cy.get('#inputEmail').clear()       
     })
})