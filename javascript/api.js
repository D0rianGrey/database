const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));


let student = {
    firstName: 'Eugene',
    lastName: "Vakerin",
    age: 29,
    hobbies: [
        "testing", "computer gaming"
    ],

}

let jsonFromObj = JSON.stringify(student);
console.log(jsonFromObj)