//let names = ['Eugene', 'Anton', 'Maria'];

let user = {
    name: "John",
    age: 30,
    size: {
        width: 1000,
        height: 2000
    }
};

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`);
// }

// let [firstName,...rest] = names;
//
// console.log(firstName)
// console.log(rest);
// console.log(rest[0]);

// let z = 4;
//
//
// (age = z > 4 ? 99 : 999, name = user)
//
// console.log(age);
// console.log(name);

// let {name: firstName = "Default", age, size: {width, height}} = user;
//
// console.log(firstName)
// console.log(age)
// console.log(width)
// console.log(height)


// class Car {
//     _gasVolume = 0;
//     set gasVolume(volume) {
//         if (volume < 0) throw new Error("Negative value");
//         this._gasVolume = volume;
//     }
// }
//
// let car1 = new Car();
// car1.gasVolume = -100;


// class Car {
//     constructor(volume) {
//         this._volume = volume;
//     }
//
//     get volume() {
//         return this._volume;
//     }
// }
//
// let car1 = new Car(100);
// car1._volume = 100;
// console.log(car1.volume)








