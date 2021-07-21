class MathUtilError {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error("Total Parameter harus lebih dari 0");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }
        return result;
    }
}

try {
   console.log(MathUtilError.sum());
   console.log("Test");
} catch (error) {
    console.log(`Terjadi error ${error.message}`);
} finally {
    console.log("Kode Program selesai");
}

class Counter {
    #counter = 0;

    next(){
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());




