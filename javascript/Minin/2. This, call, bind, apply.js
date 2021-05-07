function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Eugene',
    age: 25,
    sayHello: hello,
    sayHelloWindows: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 20
}

// person.logInfo.bind(lena, 'FrontEnd', '8-999-888-777')(); -> надо вызывать через ()
// person.logInfo.call(lena, 'FrontEnd', '8-999-888-777'); -> сразу вызывает
person.logInfo.apply(lena, ['FrontEnd', '8-999-888-777']);

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })
}

console.log(array.multBy(20));

//console.log(multBy(array, 15));