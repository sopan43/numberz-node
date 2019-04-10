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
    if (isNaN(number) ) {
        result.error = "Input Should be a Number";
    } else {
        let powOfAnswer = powOf(2, number);
        result.answer = powOfAnswer.answer;
    }
    return result;
}

function tenPower(number) {
    let result = {};
    if (isNaN(number) ) {
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

module.exports.sqrtOf = sqrtOf;
module.exports.sqOf = sqOf;
module.exports.twoPower = twoPower;
module.exports.tenPower = tenPower;
module.exports.powOf = powOf;