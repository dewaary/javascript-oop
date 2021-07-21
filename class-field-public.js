

class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {

    }
}

const dewa = new Customer("Dewa", "Gede Agung");
console.log(dewa);