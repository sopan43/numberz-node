function sqrtOf(number) {
    let result = {};
    let powOfAnswer = powof(number, 0.5);
    result.answer = powOfAnswer.answer;
    return result;
}

function sqOf(number) {
    let result = {};
    let powOfAnswer = powof(number, 2);
    result.answer = powOfAnswer.answer;
    return result;
}

function twoPower(number) {
    let result = {};
    let powOfAnswer = powof(2, number);
    result.answer = powOfAnswer.answer;
    return result;
}

function tenPower(number) {
    let result = {};
    let powOfAnswer = powof(10, number);
    result.answer = powOfAnswer.answer;
    return result;
}

function powOf(base, power) {
    let result = {};
    result.answer = Math.pow(base, power);
    return result;

}

module.export.sqrtOf;
module.export.sqOf;
module.export.twoPower;
module.export.tenPower;
module.export.powOf;