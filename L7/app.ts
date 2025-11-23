//1
type Combinable = number | string;
type Numeric = number | boolean;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
};
console.log(add(40, 60)); // 100
console.log(add("10", 40)); //1040

//2
type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1: ElevatedEmployee = {
  name: "Mohit",
  priviliges: ["create server", "Verify docs"],
  startDate: new Date(),
};

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("Name: ", emp.name);
  if ("priviliges" in emp) console.log("Priviliges: ", emp.priviliges);
  if ("startDate" in emp) console.log("Start Date: ", emp.startDate);
};

printEmployeeInfo(emp1);

// 3 type guard in class
class Car {
  drive() {
    console.log("Driving Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }
  loadCargo(amount: number) {
    console.log("loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  // Method 1 of typeguard
  if ("loadCargo" in vehicle) vehicle.loadCargo(500);

  // Method 2 of typeguard
  if (vehicle instanceof Truck) vehicle.loadCargo(500);
};

useVehicle(v1);
useVehicle(v2);

//! type casting / type assertion

// Way 1
//const userInput = <HTMLInputElement>document.getElementById("user-input")!;

// Way 2
const userInput = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "Hi There";
