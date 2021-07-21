class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtilError {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new ValidationError("Total Parameter harus lebih dari 0", "numbers");
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
    if (error instanceof ValidationError) {
        console.error(`terjadi error di ${error.field} dengan error ${error.message}`);
    }else {
        console.log(`Terjadi error : ${error.message}`);
    }
} finally {
    console.log("Kode Program selesai");
}