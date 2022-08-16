describe("Main page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Rendering main page", () => {
    cy.get("h2").contains("QUIZ QUIZ");
  });

  it("Click Start Button", () => {
    cy.get("button").click();
    cy.url().should('include', '/quiz');
    cy.url().should('eq', 'http://localhost:3000/quiz');
  });
});
