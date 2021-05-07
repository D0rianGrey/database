// const person = {
//   name: 'Eugene',
//   age:29,
//   greet: function () {
//       console.log('Greet!');
//   }
// };

const person = new Object({
    name: 'Eugene',
    age: 29,
    greet: function () {
        console.log('Greet!');
    }
});

Object.prototype.sayHello = function () {
    console.log("Hello!");
}

//console.log(person);

const eugene = Object.create(person);

const str = new String('I am string');
console.log(str);


