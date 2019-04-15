Numberz
=========

Module to [node.js](http://nodejs.org/) perform mathematical operations at easy.

Using the [bn.js](https://www.npmjs.com/package/bn.js) module it can return numbers
of any size without being limited by the hardcoded javascript `Number.MAX_LIMIT`.

Usage
-----

### Factorial

Find factorial of a number:
> **WARNING:** Input should be a Positive Number

```js
const numberz = require ('numberz');
const factorial = numberz.factorialOf(50);
console.log (factorial);
```

Result:

```js
Calling factorialOf for 50 { answer: '30414093201713378043612608166064768844377641568960512000000000000' }
```
Error:
```js
const numberz = require ('numberz');
const factorial = numberz.factorialOf('wertyuiuy');
console.log (factorial);
```

Error Result:
```js
{ error: 'Input Should be a Positive Number' }
```

Author
------

Sopan Mittal