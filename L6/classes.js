//! Basic class
// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe() {
//     console.log("Department", this.name);
//   }
// }
// const accounting = new Department("Accounts");
// accounting.describe();
// const accountingCopy = {
//   name: "Dummy",
//   describe: accounting.describe,
// };
// accountingCopy.describe();
// //! Access Modifiers
// class Department {
//   name: string;
//   private employees: string[];
//   constructor(n: string) {
//     this.name = n;
//     this.employees = [];
//   }
//   describe() {
//     console.log("Department", this.name);
//   }
//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }
//   printEmployeeInfo() {
//     console.log("Number of employees:", this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounts");
// accounting.describe();
// accounting.addEmployee("Mohit Khandelwal");
// accounting.addEmployee("MS Dhoni");
// accounting.printEmployeeInfo();
// // accounting.employees = ["abc"]; //  Cant' change employees array directly because it is private
//! readonly
// class Department {
//   private readonly id: string;
//   // We can create variable directly inside constructor also,
//   // no need to create it outside constructor
//   constructor(public name: string, private employees: string[]) {
//     this.id = "D1";
//   }
//   describe() {
//     // this.id = "E1"; // Id can be initialize only once since it is readable. It is initialized once in constructor
//     console.log("Department", this.name);
//   }
//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }
//   printEmployeeInfo() {
//     console.log("Number of employees:", this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounts", []);
// accounting.describe();
// accounting.addEmployee("Mohit Khandelwal");
// accounting.addEmployee("MS Dhoni");
// accounting.printEmployeeInfo();
// // accounting.employees = ["abc"]; //  Cant' change employees array directly because it is private
//! Inheritance
//! Override property and protected access modifier
//! Setter and Getter Method
class Department {
    name;
    employees;
    id;
    // We can create variable directly inside constructor also,
    // no need to create it outside constructor
    constructor(n, id) {
        this.name = n;
        this.employees = [];
        this.id = id;
    }
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInfo() {
        console.log("Number of employees:", this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    reports;
    constructor(id) {
        super("Accounting", id);
        this.reports = [];
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp === "Patel")
            return;
        this.employees.push(emp);
    }
    get getReports() {
        if (this.reports.length > 0)
            return this.reports;
        throw new Error("Report not found");
    }
    set setReports(value) {
        if (!value)
            throw new Error("Please pass value");
        this.reports.push(value);
    }
}
const accDep = new AccountingDepartment("d1");
accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe();
// const obj = new Department("Mohit", "A5");
// obj.addEmployee("Patel");
// obj.printEmployeeInfo();
// accDep.addEmployee("Patel");
// accDep.addEmployee("Mohit");
//accDep.printEmployeeInfo();
// setter and getter
console.log(accDep.getReports);
accDep.setReports = "A5";
console.log(accDep.getReports);
//! static method
class Department2 {
    name;
    employees;
    id;
    // We can create variable directly inside constructor also,
    // no need to create it outside constructor
    constructor(n, id) {
        this.name = n;
        this.employees = [];
        this.id = id;
    }
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInfo() {
        console.log("Number of employees:", this.employees.length);
        console.log(this.employees);
    }
    static getSalary() {
        return { salary: 50000 };
    }
}
const salary = Department2.getSalary(); // without creating object, we can access static method by class name
console.log(salary);
//! Abstract classes
class Department3 {
    name;
    employees;
    id;
    constructor(n, id) {
        this.name = n;
        this.id = id;
        this.employees = [];
    }
}
class Subclass extends Department3 {
    reports;
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
    }
    describe() {
        console.log("Department", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const subClass = new Subclass("D1", []);
subClass.displayName();
export {};
//# sourceMappingURL=classes.js.map