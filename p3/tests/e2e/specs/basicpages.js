// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {
  it('visits the home page', () => {
    cy.visit('/')
    cy.contains('h3', 'Then A Night In is for you!')
  })
});
describe('MoviesPage', () => {
  it('checks if the movies page loads a movie', () => {
    cy.visit('/movies')
    cy.contains('span', 'Directed by:')
  })
  it('checks if the movies/:id is loading the data as expected', () => {
    cy.visit('/movies/1')
    cy.contains('h2', 'Godzilla vs. Kong')
  })

});
describe('MealsPage', () => {
  it('checks if the meals page loads a meal', () => {
    cy.visit('/meals')
    cy.contains('span', 'Serving Size:')
  })
  it('checks if the meals/:id is loading the data as expected', () => {
    cy.visit('/meals/1')
    cy.contains('h2', 'Instant Pot BBQ Chicken Thighs')
  })

});
describe('DrinksPage', () => {
  it('checks if the drinks page loads a drink', () => {
    cy.visit('/drinks')
    cy.contains('span', 'Served in:')
  })
  it('checks if the drinks/:id is loading the data as expected', () => {
    cy.visit('/drinks/1')
    cy.contains('h2', 'Mojito')
  })

});
