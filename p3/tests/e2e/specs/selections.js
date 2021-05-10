
describe('Viewing and Making Selections', () => {

    const user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('lets a user log in and view their selections', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=view-selections]').click();
        cy.contains('h1', "Decisions I've made");
        cy.get('[data-test="movie-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', 'movies/1'); //seeded for Jill
        cy.get('[data-test="drink-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', 'drinks/2'); //seeded for Jill
        cy.get('[data-test="meal-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', 'meals/1'); //seeded for Jill
    })
    it('lets a user log in and reject a Movie', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("movies").click();
        cy.get('button.no').click();    
        cy.get('[data-test=show-rejected]').contains("Your rejection was noted.");     
    })
    it('lets a user log in and select a Movie', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("movies").click();
        cy.get('button.yes').click();    
        cy.get('[data-test=show-selected]').contains("Your selection was noted.");     
    })
    it('lets a user log in and reject a Meal', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("meals").click();
        cy.get('button.no').click();    
        cy.get('[data-test=show-rejected]').contains("Your rejection was noted.");     
    })
    it('lets a user log in and select a Meal', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("meals").click();
        cy.get('button.yes').click();    
        cy.get('[data-test=show-selected]').contains("Your selection was noted.");     
    })
    it('lets a user log in and reject a Drink', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("drinks").click();
        cy.get('button.no').click();    
        cy.get('[data-test=show-rejected]').contains("Your rejection was noted.");     
    })
    it('lets a user log in and select a Drink', () => {
        cy.visit('/account');
        cy.get('[data-test=email]').clear().type(user.email);
        cy.get('[data-test=password]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=nav]').contains("drinks").click();
        cy.get('button.yes').click();    
        cy.get('[data-test=show-selected]').contains("Your selection was noted.");     
    })

})