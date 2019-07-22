const numberz = require ('./index');

console.log("Calling factorialOf for 50", numberz.factorialOf(50));
console.log("Calling factorialOf for String", numberz.factorialOf('wertyuiuy'));
console.log("Calling factorialOf for String Number 9", numberz.factorialOf('9'));
console.log("Calling factorialOf for -3", numberz.factorialOf(-3));