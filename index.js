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
    let powOfAnswer = powOf(number, 2);
    result.answer = powOfAnswer.answer;
    return result;
}

function twoPower(number) {
    let result = {};
    let powOfAnswer = powOf(2, number);
    result.answer = powOfAnswer.answer;
    return result;
}

function tenPower(number) {
    let result = {};
    let powOfAnswer = powOf(10, number);
    result.answer = powOfAnswer.answer;
    return result;
}

function powOf(base, power) {
    let result = {};
    result.answer = Math.pow(base, power);
    return result;

}

module.exports.sqrtOf = sqrtOf;
module.exports.sqOf;
module.exports.twoPower;
module.exports.tenPower;
module.exports.powOf;