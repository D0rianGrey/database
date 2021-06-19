describe('checkbox', function () {
    it('checkbox', function () {
        cy.get().check();
        cy.get().uncheck();

        cy.get("input[type='checkbox']").check(["option-1, option-2"]);


    });
});