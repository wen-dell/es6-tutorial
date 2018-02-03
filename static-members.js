class MathUtil {

    static sum(...numbers) {
        let total = 0;

        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }

        return total;
    }

}

console.log(MathUtil.sum(1, 2, 3, 4, 5));