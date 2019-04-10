const numberz = require ('./index');

console.log("Calling sqrtOf for 3", numberz.sqrtOf(3));
console.log("Calling sqrtOf for String", numberz.sqrtOf('wertyuiuy'));
console.log("Calling sqrtOf for String Number 9", numberz.sqrtOf('9'));
console.log("Calling sqrtOf for -3", numberz.sqrtOf(-3));