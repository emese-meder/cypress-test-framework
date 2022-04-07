import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

// E2E Tests for the BBC website

Given('I open the Google Homepage', ()=> {

  //go to page
  cy.visit('/') // 'https://www.google.com' + '/'

  // clear cookies again after visiting to remove
  // any 3rd party cookies picked up
  cy.clearCookies();
});

When('I type {string} in the search field', (searchTerm)=> {
  cy.get('input[type="text"]').should('be.visible').type(searchTerm);
});

Then('I hit enter', ()=> {
  cy.get('input[type="text"]').type('{enter}')
});

Then('I am directed to the search results', ()=> {
  cy.title().should('match', /White Dwarf - Google Search/);
});

