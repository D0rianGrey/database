function function1() {
    return new Promise((resolve, reject) => {
       resolve()
    });
}

function1().then((item) => {
    console.log("OK!" + item);
});