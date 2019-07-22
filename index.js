const BN = require('bn.js');

function factorialOf(number) {
    let result = {};
    if (isNaN(number) || number < 0) {
        result.error = "Input Should be a Positive Number";
    } else if (number == 0) {
        result.answer = 1;
    } else {
        let fact = new BN('1', 16);
        let i = new BN('1', 16);
        const one = new BN('1', 16);
        while (number--) {
            fact = fact.mul(i);
            i = i.add(one)

        }
        result.answer = fact.toString(10);
    }
    return result;
}

module.exports.factorialOf = factorialOf;