describe('', function () {
    it('', function () {
        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp');
        const file = '159.png';
        cy.get('[type="file"]').attachFile(file);

    });
});