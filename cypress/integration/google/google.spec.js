import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

// E2E Tests for the BBC website

Given('I open the Google Homepage', ()=> {

  //go to page
  cy.visit('/') // 'https://www.google.com' + '/'

  // clear cookies again after visiting to remove
  // any 3rd party cookies picked up
  cy.clearCookies();

  cy.get("body").then($body =>{
    if ($body.find("button[class='tHlp8d']").length > 0){
      cy.get("button[class='tHlp8d']").contains('I agree').click();
    }
  })

});

When('I type {string} in the search field', (searchTerm)=> {
  cy.get('input[type="text"]').should('be.visible').type(searchTerm);
});

Then('I hit enter', ()=> {
  cy.get('input[type="text"]').type('{enter}')
});

Then('I am directed to the search results', ()=> {
  cy.title().should('match', /Planetary Nebula - Google Search/);
});

