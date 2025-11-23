var add = function (a, b) {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
};
console.log(add(40, 60)); // 100
console.log(add("10", 40)); //1040
var emp1 = {
    name: "Mohit",
    priviliges: ["create server", "Verify docs"],
    startDate: new Date(),
};
var printEmployeeInfo = function (emp) {
    console.log("Name: ", emp.name);
    if ("priviliges" in emp)
        console.log("Priviliges: ", emp.priviliges);
    if ("startDate" in emp)
        console.log("Start Date: ", emp.startDate);
};
printEmployeeInfo(emp1);
// 3 type guard in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving Car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving Truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
var useVehicle = function (vehicle) {
    vehicle.drive();
    // Method 1 of typeguard
    if ("loadCargo" in vehicle)
        vehicle.loadCargo(500);
    // Method 2 of typeguard
    if (vehicle instanceof Truck)
        vehicle.loadCargo(500);
};
useVehicle(v1);
useVehicle(v2);
//! type casting / type assertion
// Way 1
//const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// Way 2
var userInput = document.getElementById("user-input");
userInput.value = "Hi There";
