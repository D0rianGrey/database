describe('', function () {
    before(function () {
        cy.fixture('example.json').then((data) => {
            this.data = data;
        })
    })
    it('should ', function () {
        cy.log(this.data);
    });
});