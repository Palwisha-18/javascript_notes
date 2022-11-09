// integer numbers

let counter = 100; // 100

// octal nummbers 

let num = 071;
console.log(num); // 57

let num = 080;
console.log(num); // 80

let num = 0o71;
console.log(num); // 57

let num = 0o80;
console.log(num); // SyntaxError: Invalid or unexpected token

// hexadecimal nummbers 

let num = 0x1a;
console.log(num); //26

// floating-point numbers

let price = 9.99;
let tax = 0.08;
let discount = .05; // valid but not recommeded

let amount = 3.14e7;
console.log(amount); // 31400000

let amount = 5e-7; 
console.log(amount); // 0.0000005

// bigint

let pageView = 9007199254740991n;
