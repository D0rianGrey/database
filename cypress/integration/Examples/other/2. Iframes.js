describe('IFrames', function () {
    it('should test iframe 1', function () {
        /*
        * 1. Нам нужен плагин -> npm install -D cypress-iframe
        * 2. Добавить импорт в commands.js -> import 'cypress-iframe';
        * 3. У нас есть команда cy.iframe()
        * 4. Находим фрейм , потом после .then находим внутри него нужный элемент
        * 5. Заворачиваем результат jquery функции в cy.wrap() и кликаем уже через cypress
        */
        cy.visit('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe?retiredLocale=uk');
        cy.iframe('.interactive').then((iframe) => {
            let element = iframe.contents().find("#css");
            cy.wrap(element).click();
        })
    });

    it('should test iframe 2', function () {
        cy.visit('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe?retiredLocale=uk');
        cy.get('.interactive').its('0.contentDocument.body').then(cy.wrap).find('#css').click();
    });

    it.only('should test iframe3', function () {
        cy.visit('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe?retiredLocale=uk');
        cy.iframe('.interactive').then((iframe) => {
            cy.wrap(iframe).as('iframe');
        })
        cy.get('@iframe').find('#css').click();
    });
});