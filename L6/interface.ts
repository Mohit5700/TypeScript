//! INTERFACE AS BLUEPRINT OF OBJECT
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;

user = {
  name: "Mohit",
  age: 25,
  greet(text) {
    console.log(`${text} ${this.name}`);
  },
};

user.greet("Good Morning");

//! INTERFACE WITH CLASS (implements)
interface Greetable {
  readonly name: string;
  greet(text: string): void;
}

class Human implements Greetable {
  constructor(public name: string) {}
  greet(text: string) {
    console.log(`${text} ${this.name}`);
  }
}

let human1: Greetable = new Human("Patel");
// human1.name = "Mohit"; // ❌ readonly — cannot modify

//! INTERFACE INHERITANCE (EXTENDING)
interface Named1 {
  readonly name: string;
}

interface Named2 {
  readonly name: string;
}

interface Greetable2 extends Named1, Named2 {
  greet(text: string): void;
}

class Demo implements Greetable2 {
  constructor(public name: string) {}
  greet() {
    console.log("Hello " + this.name);
  }
}

const d1: Greetable2 = new Demo("Mohit");
console.log(d1);

//! OPTIONAL PROPERTIES IN INTERFACE
interface Named3 {
  readonly name: string;
  outputName?: string; // optional
}

class Mohit implements Named3 {
  constructor(public name: string) {}
}

const m = new Mohit("Mohit");
