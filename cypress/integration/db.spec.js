describe("Test DB", () => {
    it("Test", () => {
        let query = "select * from vacancy_statuses";
        cy.task('queryDb', query).then((result) => {
            //console.log(result);
            console.log(result.forEach((item)=>console.log(item["name"])));
        });
    });
});
