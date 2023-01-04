/// <reference  types= "cypress" />
describe("Test Scenarios to the Quales Learning App",() => {
it("Shows that a course can be created, viewed, updated, and deleted", () =>{
    cy.visit("http://tawdry-rule.surge.sh");
    // This is to create a course
    cy.get('.css-48p1y4 > .MuiButton-root').click();
    cy.get('[data-testid="EmailAddress"]').type("ayp@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
    cy.get('.MuiButton-contained').click();
    cy.get('[data-testid="Title*"]').type("Programming", {force: true});
    cy.get('[data-testid="Description*"]').type("This is just a course that is required for you as a programmer to take seriously");
    cy.get('#demo-simple-select').click();
    cy.contains("Quality Assurance").click();
    cy.get('[data-testid="isPremium"]').click();
    cy.get('[data-testid="ImageURL"]').type("https://aitechnologiesng.com/wp-content/uploads/2021/01/software-development-training-in-abuja.jpg");
    cy.get('[data-testid="online"]').click();
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/watch?v=3fUbBnN_H2c")
    cy.get('.css-tzsjye > .MuiButton-root').click();

    
    

});

});