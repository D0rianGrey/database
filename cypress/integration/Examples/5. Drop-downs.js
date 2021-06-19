describe('drop-down', function () {
    it('drop-down', function () {
        cy.get("#dropdown").select("c#").contains("c#");
    });
});