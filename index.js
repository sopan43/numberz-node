const BN = require('bn.js');

function sqrtOf(number) {
    let result = {};
    if (isNaN(number) || number < 0) {
        result.error = "Input Should be a Positive Number";
    } else {
        let powOfAnswer = powOf(number, 0.5);
        result.answer = powOfAnswer.answer;
    }
    return result;
}

function sqOf(number) {
    let result = {};
    if (isNaN(number)) {
        result.error = "Input Should be a Number";
    } else {
        let powOfAnswer = powOf(number, 2);
        result.answer = powOfAnswer.answer;
    }
    return result;
}

function twoPower(number) {
    let result = {};
    if (isNaN(number)) {
        result.error = "Input Should be a Number";
    } else {
        let powOfAnswer = powOf(2, number);
        result.answer = powOfAnswer.answer;
    }
    return result;
}

function tenPower(number) {
    let result = {};
    if (isNaN(number)) {
        result.error = "Input Should be a Number";
    } else {
        let powOfAnswer = powOf(10, number);
        result.answer = powOfAnswer.answer;
    }
    return result;
}

function powOf(base, power) {
    let result = {};
    if (isNaN(base) || isNaN(power)) {
        result.error = "Input Should be a Positive Number";
    } else {
        result.answer = Math.pow(base, power);
    }
    return result;
}

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

module.exports.sqrtOf = sqrtOf;
module.exports.sqOf = sqOf;
module.exports.twoPower = twoPower;
module.exports.tenPower = tenPower;
module.exports.powOf = powOf;
module.exports.factorialOf = factorialOf;