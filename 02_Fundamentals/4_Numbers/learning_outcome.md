<h3>JavaScript Numbers:</h3>

JavaScript uses the number type to represent both integers and floating-point values.

To support various types of numbers, JavaScript uses different number literal formats:


- integers
    * are representated as decimal numbers.
    * can be represented in Octal (base 8) and Hexadecimal (base 16) formats as well. They are treated as decimal numbers.
    * Octal number:
        - starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7).
        - ES6 introduced a new octal literal that starts with the `0o` followed by a sequence of octal digits (from 0 to 7).
    * Hexadecimal number:
        - starts with `0x` or `0X` followed by a sequence of hexadecimal digits (numbers from 0 through 9, and a through f).
- floating-point numbers
    * can be defined by including a decimal point and at least one number after that.
    * incase of a very big number, use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power.
- big integers
    * stores whole numbers whose values are greater than 2^(53) – 1.
    * append the letter `n` at the end of the number to form a bigint literal number.
