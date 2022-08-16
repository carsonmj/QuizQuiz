describe("Quiz page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button").click();
  });

  it("Rendering quiz page", () => {
    cy.get("p").should("have.length", 2);
    cy.contains("Question");
  });

  it("Rendering quiz question", () => {
    cy.get("article .mt-8", {
      timeout: 15000
    }).invoke("text").then((text) => {
      expect(text.length).to.be.at.least(5);
    });
  });

  it("Rendering quiz options", () => {
    cy.get("article .h-16").should("have.length", 4);
    cy.get("article .h-16", {
      timeout: 15000
    }).invoke("text").then((text) => {
      expect(text.length).to.be.at.least(1);
    });
  });

  it("Rendering quiz button controller", () => {
    cy.get(".absolute svg").should("have.length", 1);
  });

  it("Can't move on to the next, If do not choose an answer", () => {
    cy.get(".right-2").click();
    cy.get("p").first().contains("1");
  });

  it("Can move on to the next question once you have chosen your answer", () => {
    cy.get("article .h-16").first().click();
    cy.get(".right-2").click();
    cy.get("p").first().contains("2");
  });

  it("Can move on to the previous question", () => {
    cy.get("article .h-16").first().click();
    cy.get(".right-2").click();
    cy.get("p").first().contains("2");
    cy.get(".left-4").click();
    cy.get("p").first().contains("1");
  });

  it("Can move on to the main page", () => {
    cy.get("button").first().click();
    cy.url().should("include", "/");
  });
});
