const numberz = require ('./index');

console.log("Calling sqrtOf for 3", numberz.sqrtOf(3));
console.log("Calling sqrtOf for String", numberz.sqrtOf('wertyuiuy'));
console.log("Calling sqrtOf for String Number 9", numberz.sqrtOf('9'));
console.log("Calling sqrtOf for -3", numberz.sqrtOf(-3));
console.log();
console.log("Calling sqOf for 3", numberz.sqOf(3));
console.log("Calling sqOf for String", numberz.sqOf('wertyuiuy'));
console.log("Calling sqOf for String Number 9", numberz.sqOf('9'));
console.log("Calling sqOf for -3", numberz.sqOf(-3));
console.log();
console.log("Calling factorialOf for 5", numberz.factorialOf(5));
console.log("Calling factorialOf for String", numberz.factorialOf('wertyuiuy'));
console.log("Calling factorialOf for String Number 9", numberz.factorialOf('9'));
console.log("Calling factorialOf for -3", numberz.factorialOf(-3));