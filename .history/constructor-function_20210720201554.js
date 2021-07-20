// Penulisan Constructor function diawali huruf kapital

// Pembuatan object dengan constructor function
function Person() {
    this.firstName = "";
    this.lastName = "";
}

const dewa = new Person();
dewa.firstName = "Dewa Gede";
dewa.lastName = "Agung Ari"



const ari = new Person();
ari.firstName = "Agung Ari";


console.log(dewa);
console.log(ari);