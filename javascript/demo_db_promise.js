const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "admin-dev.projects.local",
    user: "qc",
    database: "ss_ps_db",
    password: "4ls1wFwgx9W4ZltL!"
});

function connectToDBOne(query) {
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
        connection.query(query, ((err1, result, fields) => {
            console.log(result);
            return new Promise((resolve, reject) => {
                connection.end(function (err) {
                    if (err) {
                        return console.log("Ошибка: " + err.message);
                    }
                    console.log("Подключение закрыто");
                });
                resolve();
            });
        }));
    });
}

function connectToDBTwo(query) {
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    return new Promise((resolve, reject) => {
        connection.query(query, ((err1, result, fields) => {
            console.log(result);
            resolve();
        }));
    }).then(() => {
        connection.end(function (err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });
    });
}

let a = "select * from vacancy_statuses";

//connectToDBOne(a);
connectToDBTwo(a);

