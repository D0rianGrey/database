async function hello() {
    return [{name: "Eugene", age: 29}, {name:"Anton", age: 28}];
}

//hello().then((console.log))

hello().then((result) => result.filter((item)=> item.age > 28).forEach((item)=>console.log(item)));