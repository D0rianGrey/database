// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10);
// console.log(addOne(10))
// console.log(addTen(10))


// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com.ua');
// const comRu = urlGenerator('ru');
// console.log(comUrl('google'))
// console.log(comRu('vkontakte'))

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Eugene', age: 29, job: 'QA'
};
const person2 = {
    name: 'Anton', age: 28, job: 'FrontEnd'
};

bind(person1, logPerson)()
bind(person2, logPerson)()
