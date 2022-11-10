<h3>JavaScript Logical Operators:</h3>

Logical operators are used to compare variables and do something based on the result of that comparison.

- logical NOT (`!`):
    * `!` `undefined` equals `true`
    * `!` `null` equals `true`
    * `!` `0` equals `true`
    * `!` `NaN` equals `true`
    * `!` `object` equals `false`
    * `!` `''` equals `false`
    * double negation (`!!` ):
        - logical not operator is applied twice.
- logical OR (`||`)
- logical AND (`&&`)



The chain of `&&` operators:
* Evaluates values from left to right.
* For each value, converts it to a boolean. If the result is `false`, stops and returns the original value.
* If all values are truthy values, returns the last value.

The chain of `||` operators:
* Evaluates values from left to right.
* For each value, converts it to a boolean. If the result is `true`, stops and returns the value.
* If all values have been evaluated to false, returns the last value.

The logical operator precedence from the highest to the lowest is `!`, `&&` and `||`.