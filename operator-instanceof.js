class Employee {

}

class Manager {

}

const dewa = new Employee();
const putra = new Manager();

console.log(dewa instanceof Employee); // true
console.log(dewa instanceof Manager); // false

console.log(putra instanceof Employee); // false
console.log(putra instanceof Manager); // true


/* Operator Instanceof Inheritance */

class Employee {

}

class Manager extends Employee{

}

const dewa = new Employee();
const putra = new Manager();

console.log(dewa instanceof Employee); // true
console.log(dewa instanceof Manager); // false

console.log(putra instanceof Employee); // true
console.log(putra instanceof Manager); // true