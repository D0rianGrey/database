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
    it.only('fixtures', function () {
        cy.fixture('example.json').then(({name, email, body}) => {
            cy.log(name);
            cy.log(email);
            cy.log(body);
        });
    });
});