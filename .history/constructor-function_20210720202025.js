// Penulisan Constructor function diawali huruf kapital

// Pembuatan object dengan constructor function
function Person() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const dewa = new Person();
dewa.firstName = "Dewa Gede";
dewa.lastName = "Agung Ari"
dewa.sayHello = "Dewa Gede Agung";



const ari = new Person();
ari.firstName = "Agung Ari";
ari.lastName = "Dewa Gede";
ari.sayHello = "Septiyadi";


console.log(dewa);
console.log(ari);