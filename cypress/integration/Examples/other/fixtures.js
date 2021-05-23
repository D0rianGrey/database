describe('fixtures', function () {

    before(() => {
        cy.fixture('example.json').as('data');
    })
    it('fixtures', function () {
        cy.get('@data').then((data) => {
            cy.log(data.name);
            cy.log(data.email);
        }).then((data) => {
            cy.log(data.email);
        })
    });
});