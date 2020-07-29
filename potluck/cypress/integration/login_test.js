// cypress tests for Joe stretch

describe('Input and login button', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', 'localhost')
    })
    it('verify the error messages appear when you dont meet the requirements', () => {
        cy.get('input[name="username"').type('joebay24').clear()
        cy.get('input[name="password"').type('password').clear()
        cy.get('.loginError').contains('Username is required')
        cy.get('.loginError').contains('Password is required')
    })
    it('it can type in the text fields and officially login', () => {
        cy.get('input[name="username"').type('joebay24')
        cy.get('input[name="password"').type('password')
        cy.get('#login-button').click()
    })
})