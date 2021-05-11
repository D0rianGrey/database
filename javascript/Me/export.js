let obj = {
    firstName: "Eugene",
    lastName: "Vakerin",
    age: 30,
    fullName() {
        console.log(this.firstName + this.lastName);
    }

};

function cube(x) {
    return x * x * x;
}

let a = 10;

module.exports = {
    obj,
    cube,
    a
};
