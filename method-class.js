
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.log(`Hello name ${name}, my name is ${this.name}`);
    }
}

const dewa = new Person ("Dewa Gede");
console.log(dewa);
dewa.sayHello("Putra");

const ari = new Person ("Agung Ari");
console.log(ari);
ari.sayHello("Angga");