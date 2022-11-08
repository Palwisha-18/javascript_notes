// declare a variable using var keyword

var message;

// declare a variable using let keyword

let message;

// initialize a variable 

let message = "Hello";

// initialize multiple variables in a single line

let message = "Hello", counter = 1;

// change a variable

let counter = 1;
counter = 10;

// undefined variable

let message;
console.log(message); // undefined

// undeclared variable

console.log(abc); // Will throw refernce error

// constant variable

const counter = 1;

counter = 3; // Will throw an error since constant variables cannot be changed
