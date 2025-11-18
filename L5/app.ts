let userInput: unknown;
let userName: string;

userInput = 10;
userName = "Mohit";

// userName = userInput; // Error

let xyz: any;
userName = xyz; // Valid

const generateError = (message: string, code: number): never => {
  throw { message: message, statusCode: code };
};

const res = generateError("Internal Server Error", 500);
console.log(res);
