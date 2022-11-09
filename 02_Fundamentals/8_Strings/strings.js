// either single quotes (') or double quotes (") can be used to create literal strings

let str = 'Hi';
let greeting = "Hello";

/*
in ES6, template literals were introduced that allowed single quotes and double quotes
inside a string without the need of escaping them.
*/

let mesage = `"I'm good". She said"`;

/* 
variables and expressions can be placed inside a template literal.
JavaScript will replace the variables with their value in the string.
This is called string interpolation
*/

let person = 'John';
let message = `Hi, I'm ${person}.`;

console.log(message); // Hi, I'm John.

// getting the length of the string

let str = "Good Morning";
console.log(str.length);  // 12

// accessing characters

let str = "Hello";
console.log(str[0]); // "H"

let str = "Hello";
console.log(str[str.length -1]); // "o"

// concatenating strings via + operator

let name = 'John';
let str = 'Hello ' + name;

console.log(str); // "Hello John"

// converting values to string

let status = false;
let str = status.toString(); // "false"
let back = Boolean(str); // true

// comparison operators compare strings based on the numeric values of the characters

let result = 'a' < 'b';
console.log(result); // true

let result = 'a' < 'B';
console.log(result); // false
