new Promise((resolve, reject) => {
    console.log("Начало");
    resolve();
}).then(() => {
    console.log("Первый then");
}).then(() => {
    console.log("Второй then");
})