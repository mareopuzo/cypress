///<reference types = "cypress" />

describe ("Placing order test scenarios to the Amazon Web App", () => {
it("validates that a user with a valid profile is able to search for a product, can add to cart and delete from cart" , () => {

cy.visit("https://www.amazon.com");
cy.get('#nav-link-accountList').click();
cy.get('#ap_email').type("mareopuzo@icloud.com");
cy.get('.a-button-inner > #continue').click();
cy.get('#ap_password').type("Clarecuz0");
cy.get('#signInSubmit').click();
cy.get('#twotabsearchtextbox').type("Rich dad poor dad" , {delay: 300});
cy.get('#nav-search-submit-button').click();
cy.get('[data-asin="1612681131"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click();
cy.get('.audioListen > .sampleAudioText').click().wait(5000);
cy.get('.sampleAudioPlaying').click();
cy.get('#add-to-cart-button').click();
cy.contains("Added to Cart").should("be.visible");
cy.get('#nav-cart').click();
cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();
cy.contains("Your Amazon Cart is empty.").should("be.visible");
cy.get('.hm-icon').click().scrollTo("bottom" , {ensureScrollable: false});
cy.get('.hmenu-visible > :nth-child(27) > .hmenu-item').click();

});

});