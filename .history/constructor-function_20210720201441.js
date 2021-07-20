// Penulisan Constructor function diawali huruf kapital

// Pembuatan object dengan constructor function
function Person() {
    this.firstName = "";
    this.lastName = "";
}

const dewa = new Person();
dewa.firstName = "Dewa Gede";
const ari = new Person();

console.log(dewa);
console.log(ari);