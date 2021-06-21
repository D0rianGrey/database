async function connectionToDB() {
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "admin-dev.projects.local",
        user: "qc",
        database: "ss_ps_db",
        password: "4ls1wFwgx9W4ZltL!"
    });
    await function connectToDB() {
        connection.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
    }();
    await function () {
        connection.query(
            'select * from consents limit 1',
            function (err, results, fields) {
                console.log(results);
            }
        );
    }();

    await function () {
        connection.end(function (err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });
    }();
}

module.exports = connectionToDB();