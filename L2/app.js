//! Object
// const person: {
//   firstName: string;
//   age: number;
//   skills: string[];
// } = {
//   firstName: "Mohit",
//   age: 25,
//   skills: ["ReactJS", "NodeJS"],
// };
//! Nested Object
// const person: {
//   firstName: string;
//   age: number;
//   xyz: {
//     address: string;
//   };
// } = {
//   firstName: "Mohit",
//   age: 25,
//   xyz: {
//     address: "Delhi",
//   },
// };
//! Array
var favoriteLanguage1;
favoriteLanguage1 = ["Hindi", "English"];
favoriteLanguage1[0] = "Spanish";
var favoriteLanguage2;
favoriteLanguage2 = ["Hindi", "English", 21, "true"];
//! Tuple
// const person: {
//   firstName: string;
//   age: number;
//   skills: string[];
//   product: [number, string];
// } = {
//   firstName: "Mohit",
//   age: 25,
//   skills: ["React", "Node"],
//   product: [10, "MacBook"],
// };
//! enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["AUTHOR"] = 1] = "AUTHOR";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
var person = {
    name: "Mohit",
    age: 25,
    role: ROLE.AUTHOR,
};
if (person.role === ROLE.ADMIN)
    console.log("ADMIN");
else if (person.role === ROLE.AUTHOR)
    console.log("AUTHOR");
else if (person.role === ROLE.USER)
    console.log("USER");
