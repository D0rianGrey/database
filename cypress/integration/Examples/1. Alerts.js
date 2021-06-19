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

    it('alert with stub', () => {
        const stub = cy.stub();
        cy.on('window:confirm', stub)
        cy.get().click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(()=>{
            return true;
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        });
    });
});