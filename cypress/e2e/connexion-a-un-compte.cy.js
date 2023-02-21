/// <reference types="cypress" />

describe("connexion reussi a un compre", () => {
	it("connexion", () => {
                   
                        cy.visit("https://calendly.com/");
                        cy.wait(3000);
                        cy.get('#onetrust-accept-btn-handler').click();
                        cy.wait(3000);
                        cy.get('#right-side-components > :nth-child(1) > .sc-1e4rkx0-0').click();
                        cy.wait(3000);
                        cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com', {force:true});
                        cy.get('[data-testid="primary-button"]').click({force:true});
                        cy.get('input[name="password"]').type('Jenifer84*');
                        cy.get("#talon").click({force:true});
                        cy.wait(2000);
                       
                      
                      
                        });
                });
   
  
