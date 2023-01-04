/// <reference types= "cypress" />
//This is to describe your test suite
describe("Login Test Scenarios to the Quales Learning App", () => {
     //This is where you write your tests.
    it("Validates that a user with correct credentials can login to the Quales Learning app on a desktop view port", () => {
      //This step visits the Quales learing app Url.
      cy.visit("http://tawdry-rule.surge.sh/");
      //Spied on the Sign Button
      cy.get(".css-48p1y4 > .MuiButton-root")
        //Cypress clicks on the element
        .click();
      //Spied on the username input field
      cy.get('[data-testid="EmailAddress"]')
        //Cypress types in the username input field
        .type("ayp@mail.com");
      //Spied on the password input field
      cy.get('[data-testid="Password"]')
        //Cypress types in the password input field
        .type("pass1234");
      //Spied on the login button
      cy.get(".MuiButton-contained")
        //Cypress clicks on the login button
        .click();
      //Assertions to confirm that expected outcome of test is matched or reached.
      cy.contains("Courses")
        //Cypress checks if the element Courses is available
        .should("be.visible");
      //Cypress checks if the element above is available
      cy.contains("Login Successful")
        //Cypress checks if the element above is available
        .should("be.visible");
      //Cypress checks if the element Login successful is available
      cy.contains("List of Courses")
        //Cypress checks if the element List of courses is available
        .should("be.visible");
      cy.contains("Ayobami")
        //Cypress checks if the element Ayobami is available
        .should("be.visible");
      cy.get(".MuiToolbar-root > .MuiButton-root")
        //Cypress checks if the element Logout is available
        .should("be.visible");

      cy.get('.MuiGrid-root > .MuiButton-root').click();
      cy.get('[data-testid="Title*"]').type("Programming", {force: true});
      cy.get('[data-testid="Description*"]').type("This is just a course that is required for you as a programmer to take seriously");
      cy.get('#demo-simple-select').click();
      cy.contains('Software Development').click();
      cy.get('[data-testid="isPremium"]').click();
      cy.get('[data-testid="ImageURL"]').type("https://aitechnologiesng.com/wp-content/uploads/2021/01/software-development-training-in-abuja.jpg");
      cy.get('[data-testid="online"]').click();
      cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/watch?v=3fUbBnN_H2c");
      cy.get('.css-tzsjye > .MuiButton-root').click();
      cy.get('.MuiToolbar-root > .MuiButton-root').click({force: true});
      cy.get('[data-testid="EmailAddress"]')
        //Cypress types in the username input field
        .type("ay@mail.com");
      //Spied on the password input field
      cy.get('[data-testid="Password"]')
        //Cypress types in the password input field
        .type("pass1234");
        cy.get(".MuiButton-contained")
        //Cypress clicks on the login button
        .click();

        


    }); 

    
  /*   //This is where you write your tests.
    it("Validates that a user with correct credentials can login to the Quales Learning app on an iphone view port", () => {
      //Open application as though it is an iphone 8 device
      cy.viewport("iphone-6");
      //This step visits the Quales learing app Url.
      cy.visit("http://tawdry-rule.surge.sh/");
      cy.get('[data-testid="MenuIcon"]').click();
      cy.contains("Login").click();
      //Spied on the username input field
      cy.get('[data-testid="EmailAddress"]')
        //Cypress types in the username input field
        .type("ay@mail.com");
      //Spied on the password input field
      cy.get('[data-testid="Password"]')
        //Cypress types in the password input field
        .type("pass1234");
      //Spied on the login button
      cy.get(".MuiButton-contained")
        //Cypress clicks on the login button
        .click();
      //Assertions to confirm that expected outcome of test is matched or reached.
      cy.contains("Courses")
        //Cypress checks if the element Courses is available
        .should("be.visible");
      //Cypress checks if the element above is available
      cy.contains("Login Successful")
        //Cypress checks if the element above is available
        .should("be.visible");
      //Cypress checks if the element Login successful is available
      cy.contains("List of Courses")
        //Cypress checks if the element List of courses is available
        .should("be.visible");
      cy.contains("Ayobami")
        //Cypress checks if the element Ayobami is available
        .should("be.visible");
      cy.get(".MuiToolbar-root > .MuiButton-root")
        //Cypress checks if the element Logout is available
        .should("be.visible");
    }); */
  }); 