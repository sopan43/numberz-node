Numberz
=========

Module to [node.js](http://nodejs.org/) perform mathematical operations at easy.

Usage
-----

### Factorial

Find factorial of a number:
> **WARNING:** Input should be a Positive Number

```js
const numberz = require ('numberz');
const factorial = numberz.factorialOf(10);
console.log (factorial);
```

Result:

```js
{ answer: 3628800 }
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