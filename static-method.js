class MathUtil {
    static sum(...numbers) {
        let total = 0;
        for(const number of numbers) {
            total += number;
        }
        return total;
    }
}

const result = MathUtil.sum(1,2,3,45,23);

console.log(result);