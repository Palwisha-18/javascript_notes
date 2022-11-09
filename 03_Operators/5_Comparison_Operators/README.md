<h3>JavaScript Comparison Operators:</h3>

Comparison operators are used to compare two values and they return boolean values.

- less than (`<`)
- greater than (`>`)
- less than or equal to (`<=`)
- greater than or equal to (`>=`)
- equal to (`==`)
- not equal to (`!=`)
- strict equal (`===`)
- not strict equal (`!==`)



Comparing Numbers:
* if values are numbers, the comparison operators perform a numeric comparison.

Comparing Strings:
* if the operands are strings, JavaScript compares the character codes numerically one by one in the string.

Compare a number with a value of another type:
* if a value is a number and the other is not, the comparison operator will convert the non-numeric value into a number and compare them numerically.

Compare an object with a non-object:
* if a value is an object, the `valueOf()` method of that object is called to return the value for comparison. If the object doesn’t have the `valueOf()` method, the `toString()` method is called instead.

Compare a Boolean with another value:

* if a value is a Boolean value, JavaScript converts it to a number and compares the converted value with the other value; `true` is converted to `1` and `false` is converted to `0`.

Compare null and undefined:
* in JavaScript, null equals undefined. Therefore, comparing them will always return `true`.

Compare NaN with other values
* if either value is NaN, then the equal operator(==) returns false.

Using Strict and Not Strict Equal:
* these operators do not convert the operand before comparison. 