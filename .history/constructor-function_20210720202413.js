// Penulisan Constructor function diawali huruf kapital

// Pembuatan object dengan constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const dewa = new Person("Dewa Gede", "Agung Ari");
// dewa.firstName = "Dewa Gede";
// dewa.lastName = "Agung Ari"
dewa.sayHello("Dewa Gede Agung");



const ari = new Person();
ari.firstName = "Agung Ari";
ari.lastName = "Dewa Gede";
ari.sayHello("Septiyadi");


console.log(dewa);
console.log(ari);