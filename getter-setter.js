class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return  `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const dewa = new Person("Dewa", "Gede");
console.log(dewa);
console.log(dewa.fullName);

dewa.fullName = "Angga Putra";
console.log(dewa);