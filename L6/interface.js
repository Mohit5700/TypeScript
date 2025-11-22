let user;
user = {
    name: "Mohit",
    age: 25,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
user.greet("Good Morning");
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
    greet(text) {
        console.log(`${text} ${this.name}`);
    }
}
let human1 = new Human("Patel");
class Demo {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const d1 = new Demo("Mohit");
console.log(d1);
class Mohit {
    name;
    constructor(name) {
        this.name = name;
    }
}
const m = new Mohit("Mohit");
export {};
//# sourceMappingURL=interface.js.map