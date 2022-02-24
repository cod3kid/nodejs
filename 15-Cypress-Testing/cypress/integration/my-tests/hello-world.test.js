/// <reference types="cypress" />

describe("blah", () => {
  it("test one", () => {
    cy.visit("https://codedamn.com");
    cy.contains("Learn Program");
    cy.get("div#root33").should("not.exist");
  });
});
