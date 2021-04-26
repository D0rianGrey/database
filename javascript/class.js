class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get getFirstName() {
        return this.name;
    };

    get getLastName() {
        return this.surname;
    };

    set setFirstName(name) {
        this.name = name;
    };

    set setLastName(surname) {
        this.surname = surname;
    }
}

let user1 = new User("Eugene", "Vakerin");
console.log(user1.getFirstName);
user1.setFirstName = "Anton";
console.log(user1.getFirstName);