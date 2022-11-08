<h3>JavaScript Data Types:</h3>

JavaScript has two types of data types: Primitive and Complex


<h4>Primitive Data Types:</h4>

- undefined
    * a variable that is declared but not initialized.
- null
    * JavaScript defines that `null` is equal to `undefined`.
- number
    * used to represent both integer and floating-point numbers.
- NaN
    * stands for Not a Number.
    * any operation with NaN returns NaN.
    * the NaN does not equal any value, including itself.
- string
    * a sequence of zero or more characters. It begins and ends with either a single quote(`'`) or a double quote (`"`).
    * they are immutable in JavaScript. e.g, characters of an existing string cannot be chamged
    * `+` can be used to concatenate strings.
- boolean
    * has two literal values: `true` and `false` in lowercase.
- symbol
    * doesnot have any literal forms.
    * use `Symbol` function to create a symbol variable. It creates a new unique value every time `Symbol()` is called.
- bigint
    * represents the whole numbers that are larger than 2^(53) – 1.
    * append the letter `n` at the end of the number to form a bigint literal number.


<h4>Complex Data Type:</h4>

- object
    * collection of properties, where each property is defined as a key-value pair.
    * To access a object’s property, we can use the dot notation (`.`) or the array-like notation (`[]`).


Note: To get the current type of the value that the variable stores, you use the `typeof` operator
