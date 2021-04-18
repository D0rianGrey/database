describe("Test DB", () => {
    it("Test", () => {

        let query = "select * from cats";
        cy.task('queryDb', query).then((result) => {
            //console.log(result);
            let expected = "White";
            let nameActual = result[1]['name'];
            expect(nameActual).to.equal(expected);
            cy.writeFile("testFile.json", result);
            cy.readFile("testFile.json").then((text) => {
                // for (let i = 0; i < 2; i++) {
                //     console.log(text[i])
                //     for (let j = 0; j < 2; j++){
                //     }
                // }
                let x = Array.from(text);
                x.forEach((element) => {
                    console.log(element)
                })
                console.log(text);
                for (let subArr of text) {
                    for (let element in subArr) {
                        if (subArr.hasOwnProperty(element)) {
                            console.log(`${element} : ${subArr[element]}`)
                        }
                    }
                }
            });
        })
    });
});