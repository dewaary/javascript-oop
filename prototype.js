// Penulisan Constructor function diawali huruf kapital

// Pembuatan object dengan constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// Penggunaan Prototype

Person.prototype.sayBye = function (){
    console.log("Good Bye");
}

Person.prototype.run = function() {
    console.log(`${this.firstName}, is runing`)
}

const dewa = new Person("Dewa Gede", "Agung Ari");
const ari = new Person("Dewa Made","Putra Angga");



console.log(dewa);
console.log(ari);

dewa.sayBye();
dewa.run();