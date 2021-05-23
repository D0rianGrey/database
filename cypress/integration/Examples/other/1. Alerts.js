describe('alert', function () {
    it('alert', function () {

        //Автоматом прожимает ОК на алерте
        cy.on('window:alert', (alertText) => {
            expect(alertText).eq('This is alert text');
        })
    });

    it('alert', function () {
        //Подверждает алерт
        cy.on('window:confirm', (alertText) => {
            return true;
            expect(alertText).eq('This is alert text');
        })
    });

    it('alert', function () {
        //Отменяет алерт
        cy.on('window:confirm', (alertText) => {
            return false;
            expect(alertText).eq('This is alert text');
        })
    });
});