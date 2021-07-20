
//Penggunaan Prototype Inheritance

function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

// Manager.prototype = Employee.prototype; // Penulisan object manager yang salah, karena melakukan assign ke Employe langsung, ini dinyatakan salah

/* Penulisan Inheritance Prototype yang benar*/
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
    console.log(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function (name) {
    console.log(`Hello ${name}, my name is Employee ${this.name}`);
}


const employee = new Employee("Dewa");
employee.sayHello("Agung Ari");

const manager = new Manager("Ari");
manager.sayHello("Agung Ari");