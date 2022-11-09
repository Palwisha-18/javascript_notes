// boolean primitive type has two literal values: true and false

let completed = true;
let running = false;

// Boolean() function can be used to cast a non-boolean values to a boolean value

let error = 'An error occurred';
let hasError = Boolean(error);

console.log(hasError); // true

// Some statements (like `if`) implicitly cast a non-boolean value into a boolean value.


let error = 'An error occurred';

if (error) {
  console.log(error);  // An error occurred
}
