describe("result page", () => {
  it("Rendering result page", () => {
    cy.visit("/result");
    cy.contains(`Time : 0'00""`);
  });

  it("Result page has 3 buttons", () => {
    cy.visit("/result");
    cy.get("button").should("have.length", 3);
  });

  it("Rendering result chart", () => {
    cy.visit("/");
    cy.get("button").click();

    for (let i = 0; i < 10; i++) {
      cy.get("article .h-16").first().click();
      cy.get(".right-2").click();
    }

    cy.get(".bg-correct p", {
      timeout: 15000,
    }).invoke("text").then((text) => {
      expect(Number(text) + Number(10 - text)).to.equal(10);
    });
  });

  it("Can try again once you have clicked 'Try Again' button", () => {
    cy.visit("/result");
    cy.get("button").first().click();
    cy.url().should("include", "/");
  });

  it("Can move on to review page once you have clicked 'Review' button", () => {
    cy.visit("/");
    cy.get("button").click();

    for (let i = 0; i < 10; i++) {
      cy.get("article .h-16").first().click();
      cy.get(".right-2").click();
    }

    cy.get("button").eq(1).click();
    cy.contains("my page");
  });

  it("Can reset question once you have clicked 'Reset' button", () => {
    cy.visit("/result");
    cy.get("button").last().click();
    cy.url().should("include", "/");
  });
});
