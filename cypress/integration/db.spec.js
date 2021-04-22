describe("Test DB", () => {


    it("Test", () => {
        let query = "select * from vacancy_statuses";
        cy.task('queryDb', query).then((result) => {
            console.log(result);
            //console.log(result.forEach((item)=>console.log(item["name"])));
            function compareDisplayOrder(a, b) {
                if (a.display_order > b.display_order) return 1;
                if (a.display_order === b.display_order) return 0
                if (a.display_order < b.display_order) return -1;
            }
            console.log(result.sort(compareDisplayOrder).filter((item)=> item.display_order != null));
        });
    });
});
