describe("Test DB", () => {
    it("Test", () => {

        let query = "select * from cats";
        cy.task('queryDb', query).then((result) => {
            console.log(result);
            let expected = "White";
            let nameActual = result[1]['name'];
            expect(nameActual).to.equal(expected);
        })
    });
});