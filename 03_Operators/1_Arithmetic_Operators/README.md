<h3>JavaScript Arithmetic Operators:</h3>

- Addition Operator (`+`)
    * returns sum of two values.
    * If either value is a string, the addition operator uses the following rules:
        - If both values are strings, it concatenates the second string to the first one.
        - If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.

- Subtraction Operator (`-`)
    * subtracts one number from another.
    * If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
        1. convert the value to a number using the Number() function.
        2. perform the subtraction.

- Multiplication Operator (`*`)
    * multiplies two numbers and returns a single value.
    * If a value is not a number, the JavaScript engine will:
        1. convert the value to a number using the Number() function.
        2. perform the multiplication.

- Divide Operator (`/`)
    * divides the first value by the second one
    * If a value is not a number, the JavaScript engine will:
        1. convert the value to a number using the Number() function.
        2. perform the division.


<h4> Using arithmetic operators with objects</h4>

- If a value is an object, the JavaScript engine will call the `valueOf()` method of the object to get the value for calculation.
- If the object doesn’t have the `valueOf()` method but has the `toString()` method, the JavaScript engine will call the `toString()` method to get the value for calculation.
