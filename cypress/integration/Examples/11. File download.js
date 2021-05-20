describe('download', function () {
    it('download', function () {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'downloads', 'example.jpg');
        cy.readFile('downloads/example.jpg').should('exist');
    });
});