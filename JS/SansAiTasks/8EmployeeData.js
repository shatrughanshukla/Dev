/*
    Employee Data

        Define the Employee Class:

            Define a class named Employee that takes parameters for name, email, age, department, position, and salary.
            Inside the class's constructor, set these parameters as properties of the new object.

        Add Methods to the Employee Class:

            Add a method named introduce inside the class that logs a greeting with the employee's name and position, e.g., "Hello, I am Sam, Software Developer".
            Add a method named displaySalary inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".

        Create and Log employee Objects:

            Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
            Create another object named manager with properties representing a manager. Log this object to the console.

        Call Methods on employee Objects:

            Call the introduce method on the newEmployee object to log a greeting with the employee's name and position.
            Call the displaySalary method on the newEmployee object to log the salary details.
            Call the introduce method on the manager object to log a greeting with the employee's name and position.
            Call the displaySalary method on the manager object to log the salary details.
*/

class Employee {
  constructor(name, email, age, department, position, salary) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
  }
  introduce() {
    console.log(`Hello, I am ${this.name}, ${this.position}`);
  }
  displaySalary() {
    console.log(`Salary: $${this.salary}`);
  }
}

const newEmployee = new Employee(
  "Shatrughan",
  "shatrughanshukla00@gmail.com",
  21,
  "CSE",
  "SDE",
  200000
);
console.log(newEmployee);
const manager = new Employee(
  "Priya Sharma",
  "priya@gmail.com",
  32,
  "Engineering",
  "Engineering Manager",
  150000
);
console.log(manager);

newEmployee.introduce();
newEmployee.displaySalary();
manager.introduce();
manager.displaySalary();