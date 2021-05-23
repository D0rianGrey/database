describe('', function () {
    it('', function () {
        //Удаляем атрибут target, кабы заставить открывать страницу в том же окне
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    });
});