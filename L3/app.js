//! Union
// const combine = (num1: number | string, num2: number | string) => {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number")
//     result = num1 + num2;
//   else result = num1.toString() + num2.toString();
//   console.log(result);
// };
var combine = function (num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number")
        result = num1 + num2;
    else
        result = num1.toString() + num2.toString();
    console.log(result);
};
combine(10, 20);
combine("Mohit", " Khandelwal");
var user = {
    name: "Mohit",
    age: 21,
    skills: ["React", "Node"],
};
var greet = function (user) { return console.log("Hi ".concat(user.name)); };
greet(user);
