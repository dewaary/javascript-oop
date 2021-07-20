
class Employee {
    // constructor(name) {
    //     this.name = name;
    // }

    sayHello(name) {
        console.log(`Hello ${name}, i am employee, my name is ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name) {
        console.log(`Hello ${name}, i am employee, my name is ${this.name}`);
    }
}


const dewa = new Employee();
dewa.name = "Dewa";
dewa.sayHello("Agung Ari");

const putra = new Manager();
putra.name = "Made Putra";
putra.sayHello("Angga Pradnyana");

console.log(dewa);
console.log(putra);
