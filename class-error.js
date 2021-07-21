class MathUtilError {
    static sum(...numbers) {
        if(numbers.length === 0) {
            throw new Error("Total Parameter harus lebih dari 0");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }
        return result;
    }
}

console.log(MathUtilError.sum());
console.log(sum(1,23,4,53,2,3,4));