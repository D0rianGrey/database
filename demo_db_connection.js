const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "hello_world_db",
    password: "password"
});
// тестирование подключения
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }

    connection.query("select * from cats", ((err1, result, fields) => {
        console.log(result);
    }))
});
// // закрытие подключения
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });