//! Function return type
const add = (num1: number, num2: number): number => num1 + num2;
console.log(add(10, 20));

const greet = (name: string): void => console.log(`Hello ${name}`);

//BAD PRACTICE -  Can assign both add, greet or any other function
// let combineFunction: Function;
// combineFunction = add;
// combineFunction = greet
// console.log(combineFunction(1, 2));
// console.log(combineFunction("Mohit"));

// GOOD PRACTICE -  Can assign only matching parameters function
let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(100, 200));

//! Function type & callback
const addHandle = (num1: number, num2: number, cb: (n: number) => void) => {
  const result = num1 + num2;
  cb(result);
};

addHandle(10, 20, (result: number) => console.log(result));
