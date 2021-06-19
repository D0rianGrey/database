describe('radio button', function () {
    it('radio button', function () {
        cy.get("#radiobutton").eq(2).check();
    });
});