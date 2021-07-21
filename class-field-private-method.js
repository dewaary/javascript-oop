class Person {
    sayHello(name) {
        if(name){
            this.#sayWithName(name);
        }else{
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.log("Hello");
    }

    #sayWithName() {
        console.log(`Hello ${this.name}`)

    }
}

const dewa = new Person();
dewa.sayHello("Dewa");