//! 1. Generics intro
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Example 1
var fruits = [];
fruits.push("Mango");
fruits.push("Apple");
fruits.push("Banana");
//fruits.push(100); // Not allowed
console.log(fruits);
var Boy = {
    name: "Mohit",
    age: 25,
};
// Example 3
var merge = function (objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
};
var result = merge({ name: "Mohit" }, { role: "Software Engineer" }, { id: 256 });
console.log(result);
//! 2. Generics Constraints
var createObject = function (key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
};
var obj = createObject("age", 25, true);
console.log(obj);
var numberBox = { value: 10 };
console.log(numberBox);
var stringBox = { value: "mohit" };
console.log(stringBox);
var objectBox = { value: { name: "Dhoni" } };
console.log(objectBox);
var response1 = {
    data: "hello",
    status: 200,
};
console.log(response1);
var response2 = {
    data: {
        key: "Mohit",
        role: "Engineer",
    },
    status: 404,
};
console.log(response2);
//! 5. Generic with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getContent());
var numberContainer = new Container(123);
console.log(numberContainer.getContent());
//! 6. Generic with Array
var getFirst = function (arr) {
    return arr[0];
};
var firstNumber = getFirst([1, 2, 3]);
console.log(firstNumber);
var firstString = getFirst(["a", "b", "c"]);
console.log(firstString);
//! 7. Generic with keyof
// How we normally fetch property of an object
var Person3 = { name: "Mohit" };
console.log(Person3["name"]); //  Way 1
console.log(Person3.name); // Way 2
var getProperty = function (obj, key) {
    return obj[key];
};
var person = { name: "Rohit", age: 25 };
var resName = getProperty(person, "name");
var resAge = getProperty(person, "age");
console.log(resName, resAge);
