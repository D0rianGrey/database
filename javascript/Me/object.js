class Test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }


}

let obj1 = new Test("Eugene", 29);
let obj2 = new Test("Anton", 28);


// new Promise((resolve, reject) => {
//     console.log(obj2.name);
//     resolve()
// }).then(() => {
//     console.log(obj1.name);
// });

async function writeName(object) {
    return object.name;
}

async function print(){
    let a = await writeName(obj2);
    let b = await writeName(obj1);
    console.log(b);
    console.log(a)
}

print();



