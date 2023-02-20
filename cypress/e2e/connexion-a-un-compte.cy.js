/// <reference types="cypress" />

describe("connexion reussi a un compre", () => {
	it("insciption", () => {
        cy.visit("https://calendly.com/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(3000);
        cy.get('#right-side-components > :nth-child(1) > .sc-1e4rkx0-0').click();
        cy.wait(3000);
        // cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com');
  
	});
});
