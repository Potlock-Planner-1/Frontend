/// <reference types="cypress" />

describe('check the inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/register')
      })

    it('can type a text for a new username', () => {
        cy.get('input[name="username"]')
          .type('testuser')
          .should('have.value','testuser')
      })

    it('can type a new password', () => {
        cy.get('input[name="password"]')
          .type('password')
      })

    it('can click on the register button', () => {
        cy.get('#register-btn').click()
    })

    it('can type its new username into the login field', () => {
        cy.get('input[name="username"]')
        .type('testuser')
    })

    it('can type its new password on the login page', () => {
        cy.get('input[name="password"]')
          .type('password')
    })
    it('can click on the login button', () => {
        cy.get('#login-button').click()
    })
})
