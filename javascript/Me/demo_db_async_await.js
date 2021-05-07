const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "admin-dev.projects.local",
    user: "qc",
    database: "ss_ps_db",
    password: "4ls1wFwgx9W4ZltL!"
});

async function connectToDb(query) {

    const a = await function first() {
        return connection.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
    };

    const b = await function second() {
        return connection.query(query, ((err1, result, fields) => {
            console.log(result);
        }));
    };


    const c = await function three() {
        return connection.end(function (err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });
    };

    a();
    b();
    setTimeout(() => {
        c();
    }, 1000);
}

let a = "select * from vacancy_statuses";

connectToDb(a);
