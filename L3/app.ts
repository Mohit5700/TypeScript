//! Union
// const combine = (num1: number | string, num2: number | string) => {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number")
//     result = num1 + num2;
//   else result = num1.toString() + num2.toString();
//   console.log(result);
// };

// combine(10, 20);
// combine("Mohit", " Khandelwal");

//! Literal Types
// const combine = (
//   num1: number | string,
//   num2: number | string,
//   conversionType: "as-number" | "as-string"
// ) => {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     conversionType === "as-number"
//   )
//     result = +num1 + +num2;
//   else result = num1.toString() + num2.toString();
//   return result;
// };

// const sum1 = combine("10", "20", "as-number");
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("Mohit", " Khandelwal", "as-string");
// console.log(sum1, sum2, combinedName);

//! TYPE ALIAS / Custom Type
type Combinable = number | string | boolean | string[];
const combine = (num1: Combinable, num2: Combinable) => {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number")
    result = num1 + num2;
  else result = num1.toString() + num2.toString();
  console.log(result);
};

combine(10, 20);
combine("Mohit", " Khandelwal");

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Mohit",
  age: 21,
  skills: ["React", "Node"],
};

const greet = (user: User) => console.log(`Hi ${user.name}`);
greet(user);
