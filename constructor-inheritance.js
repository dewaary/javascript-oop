
function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name) {
        console.log(`Hello ${name}, My name is ${firstName}`);
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const dewa = new Manager("Dewa", "Gede Agung");
console.log(dewa);