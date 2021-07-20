
class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, i am employee, my name is ${this.firstName}`);
    }
}

class Manager extends Employee {

    constructor(firstName,lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, i am employee, my name is ${this.firstName} ${this.lastName}`);
    }
}


const dewa = new Employee("Dewa");
// dewa.name = "Dewa";
dewa.sayHello("Agung Ari");

const putra = new Manager("Made", "Putra");
// putra.name = "Made Putra";
putra.sayHello("Angga Pradnyana");

console.log(dewa);
console.log(putra);
