const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "admin-dev.projects.local",
    user: "qc",
    database: "ss_ps_db",
    password: "4ls1wFwgx9W4ZltL!"
});
// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }

    connection.query("select * from vacancy_statuses", ((err1, result, fields) => {
        console.log(result);
    }));
});
//закрытие подключения
connection.end(function (err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});