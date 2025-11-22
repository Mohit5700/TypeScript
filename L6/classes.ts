//---------------------------------------------
// 1. BASIC CLASS
//---------------------------------------------
class DepartmentBasic {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department:", this.name);
  }
}

const deptBasic = new DepartmentBasic("Accounts");
deptBasic.describe();

//---------------------------------------------
// 2. ACCESS MODIFIERS (private)
//---------------------------------------------
class DepartmentPrivate {
  name: string;
  private employees: string[];

  constructor(n: string) {
    this.name = n;
    this.employees = [];
  }

  describe() {
    console.log("Department:", this.name);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployees() {
    console.log("Total employees:", this.employees.length, this.employees);
  }
}

const deptPrivate = new DepartmentPrivate("Finance");
deptPrivate.addEmployee("Mohit");
deptPrivate.addEmployee("Dhoni");
deptPrivate.printEmployees();

//---------------------------------------------
// 3. READONLY + SHORT SYNTAX IN CONSTRUCTOR
//---------------------------------------------
class DepartmentReadonly {
  private readonly id: string;

  constructor(public name: string, private employees: string[]) {
    this.id = "D1"; // readonly → cannot reassign later
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

const deptReadonly = new DepartmentReadonly("HR", []);
deptReadonly.addEmployee("Raj");
deptReadonly.printEmployees();

//---------------------------------------------
// 4. INHERITANCE + PROTECTED + OVERRIDING + GETTER/SETTER
//---------------------------------------------
class BaseDepartment {
  public name: string;
  protected employees: string[];
  private readonly id: string;

  constructor(n: string, id: string) {
    this.name = n;
    this.employees = [];
    this.id = id;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class AccountingDept extends BaseDepartment {
  private reports: string[];

  constructor(id: string) {
    super("Accounting", id);
    this.reports = [];
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log("Reports:", this.reports);
  }

  // override
  addEmployee(emp: string) {
    if (emp === "Patel") return; // custom rule
    this.employees.push(emp);
  }

  // getter
  get allReports() {
    if (this.reports.length === 0) throw new Error("No reports available.");
    return this.reports;
  }

  // setter
  set newReport(value: string) {
    if (!value) throw new Error("Report cannot be empty");
    this.reports.push(value);
  }
}

const accounting = new AccountingDept("A1");
accounting.addReport("Quarterly Bug Report");
console.log(accounting.allReports);

accounting.newReport = "Performance Report";
console.log(accounting.allReports);

//---------------------------------------------
// 5. STATIC METHODS
//---------------------------------------------
class UtilityDepartment {
  static getSalary() {
    return { salary: 50000 };
  }
}

console.log(UtilityDepartment.getSalary());

//---------------------------------------------
// 6. ABSTRACT CLASSES
//---------------------------------------------
abstract class AbstractDepartment {
  protected employees: string[];
  protected readonly id: string;

  constructor(public name: string, id: string) {
    this.employees = [];
    this.id = id;
  }

  abstract describe(): void;
  abstract displayName(): void;
}

class SubDepartment extends AbstractDepartment {
  constructor(id: string, private reports: string[]) {
    super("Research", id);
  }

  describe(): void {
    console.log("Department ID:", this.id);
  }

  displayName(): void {
    console.log("Department Name:", this.name);
  }
}

const subDept = new SubDepartment("R1", []);
subDept.displayName();
subDept.describe();
