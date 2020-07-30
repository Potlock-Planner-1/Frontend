/// <reference types="cypress" />

describe('check the inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('https://thepotluck-planner.netlify.app')
      })

      it('can click on the create an account link', () => {
        cy.get('p').click()
    })

    it('can type a text for a new username', () => {
        cy.get('input[name="username"]')
          .type('testusernew13')
          .should('have.value','testusernew13')
      })

    it('can type a new password', () => {
        cy.get('input[name="password"]')
          .type('password1')
      })

      it('can click on the registration button', () => {
        cy.get('#register-btn').click()
    })
})
