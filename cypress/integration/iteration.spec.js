describe('Iteration', () => {
    const keyWords = ["selenium", "pupeteer", "playwrite"];
    keyWords.forEach((element) => {
        it('Test', () => {
            cy.visit('https://www.google.com.ua/');
            cy.get('.gLFyf').type(element);
            cy.get("div[class='tfB0Bf'] input[name='btnK']").click();
        });
    });
})
