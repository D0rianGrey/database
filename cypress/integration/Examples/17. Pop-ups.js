describe('', function () {
    it('', function () {
        cy.window().then((win) => {
            cy.stub(win, 'open', () => {
                win.location.href = "";
            }).as("popup");
        });
        cy.get('@popup').should('be.calledWith', 'url');
    });
});