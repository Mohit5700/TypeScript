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
let favoriteLanguage1: string[];
favoriteLanguage1 = ["Hindi", "English"];
favoriteLanguage1[0] = "Spanish";

let favoriteLanguage2: any[];
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
enum ROLE {
  ADMIN,
  AUTHOR,
  USER,
}

const person: {
  name: string;
  age: number;
  role: ROLE;
} = {
  name: "Mohit",
  age: 25,
  role: ROLE.AUTHOR,
};

if (person.role === ROLE.ADMIN) console.log("ADMIN");
else if (person.role === ROLE.AUTHOR) console.log("AUTHOR");
else if (person.role === ROLE.USER) console.log("USER");
