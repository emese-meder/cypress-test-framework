import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

// E2E Tests for the BBC website

Given('I open the BBC Homepage', ()=> {

  //go to page
  cy.visit('/') // 'https://www.bbc.co.uk' + ''

  // clear cookies again after visiting to remove
  // any 3rd party cookies picked up
  cy.clearCookies();
});

When('I click on the Weather tab', ()=> {
  cy.get('nav[class*="GlobalNavigation e4np8gz0"]').should('be.visible').within(()=>{
    cy.get('[href="https://www.bbc.co.uk/weather"]:first').click();
  })
});

Then('I am directed to the BBC Weather page', ()=> {
  cy.title().should('match', /BBC Weather/);
});



