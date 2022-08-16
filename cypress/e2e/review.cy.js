describe("review page", () => {
  it("Can't move on to review page if wrong answer count is 0", () => {
    cy.visit("/review");
    cy.url().should("include", "/");
  });

  it("Can move on to review page once you have clicked 'Review' button", () => {
    let wrongCount = 0;

    cy.visit("/");
    cy.get("button").click();

    for (let i = 0; i < 10; i++) {
      cy.get("article .h-16").first().click();
      cy.get(".right-2").click();
    }

    cy.get(".bg-wrong p", {
      timeout: 15000,
    }).invoke("text").then((text) => {
      wrongCount = text;

      if (Number(text) > 0) {
        cy.get("button").eq(1).click();
        cy.contains("my page");
        cy.get("a").click();
        cy.url().should("include", "/result");
      }
    });
  });
});
