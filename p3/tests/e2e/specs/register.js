
describe('Account Page', () => {

    const user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('shows an error if you try to register with an existing e-mail address', () => {
        cy.visit('/register');
        cy.get('[data-test=name]').clear().type(user.name);
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=register-button]').click();
        cy.contains('The email has already been taken.');
    })
    it('shows an error if you leave the email field blank', () => {
        cy.visit('/register');
        cy.get('[data-test=email]').clear();
        cy.get('[data-test=register-button]').click();
        cy.contains('The email field is required.');
    })

})