///<reference types = "cypress" />

describe("This is a personal project", () => {
    it("Validates that a users with valid credentials can login to the Netflix Web application", () => {

cy.visit("https://www.netflix.com/ng/");
cy.get('.authLinks').click();
cy.get('#id_userLoginId').type("mareopuzo@icloud.com" , {force: true});
cy.get('#id_password').type("Klarecuz0");
cy.get('.btn').click();

    })
})