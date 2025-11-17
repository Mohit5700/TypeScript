//! Function return type
var add = function (num1, num2) { return num1 + num2; };
// console.log(add(10, 20));
var greet = function (name) { return console.log("Hello ".concat(name)); };
//BAD PRACTICE -  Can assign both add, greet or any other function
// let combineFunction: Function;
// combineFunction = add;
// combineFunction = greet
// console.log(combineFunction(1, 2));
// console.log(combineFunction("Mohit"));
// GOOD PRACTICE -  Can assign only matching parameters function
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
//! Function type & callback
var addHandle = function (num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
};
addHandle(10, 20, function (result) { return console.log(result); });
