//! 1. Generics intro

// Example 1
const fruits: Array<string> = [];
fruits.push("Mango");
fruits.push("Apple");
fruits.push("Banana");
//fruits.push(100); // Not allowed
console.log(fruits);

// Example 2
//const fruits: Array<Person> = [{ name: "Vivek", age: 12 }];

type Person = {
  name: string;
  age: number;
};

const Boy: Person = {
  name: "Mohit",
  age: 25,
};

// Example 3
const merge = <T, U, V>(objA: T, objB: U, objC: V) => {
  return { ...objA, ...objB, ...objC };
};

const result = merge(
  { name: "Mohit" },
  { role: "Software Engineer" },
  { id: 256 }
);
console.log(result);

//! 2. Generics Constraints
const createObject = <T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
) => {
  return { key, value, isActive };
};

const obj = createObject("age", 25, true);
console.log(obj);

//! 3. Generic Interface
interface Box<T> {
  value: T;
}
const numberBox: Box<number> = { value: 10 };
console.log(numberBox);

const stringBox: Box<string> = { value: "mohit" };
console.log(stringBox);

const objectBox: Box<object> = { value: { name: "Dhoni" } };
console.log(objectBox);

//! 4. Generic Default
interface User<T = string> {
  data: T;
  status: number;
}

const response1: User = {
  data: "hello",
  status: 200,
};

console.log(response1);

const response2: User<object> = {
  data: {
    key: "Mohit",
    role: "Engineer",
  },
  status: 404,
};
console.log(response2);

//! 5. Generic with class
class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getContent());

const numberContainer = new Container<number>(123);
console.log(numberContainer.getContent());

//! 6. Generic with Array
const getFirst = <T>(arr: T[]) => {
  return arr[0];
};

const firstNumber = getFirst([1, 2, 3]);
console.log(firstNumber);

const firstString = getFirst(["a", "b", "c"]);
console.log(firstString);

//! 7. Generic with keyof

// How we normally fetch property of an object
const Person3 = { name: "Mohit" };
console.log(Person3["name"]); //  Way 1
console.log(Person3.name); // Way 2

const getProperty = <T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] => {
  return obj[key];
};

const person = { name: "Rohit", age: 25 };
const resName = getProperty(person, "name");
const resAge = getProperty(person, "age");
console.log(resName, resAge);
