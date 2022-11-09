// unary plus operator

let x = 10;
let y = +x;

console.log(y); // 10

let s = '10';
console.log(+s); // 10

// unary minus operator

let x = 10;
let y = -x;

console.log(y); // -10

// prefix increment operator to add one to a variable

let age = 25;
++age;
console.log(age); // 26


let weight = 90;
weight = ++weight + 5; // first weight is incremented and then statement is evaluated
console.log(weight); // 96

// prefix decrement operator to subtract one from a variable

let weight = 90;
--weight;
console.log(weight); // 89


let weight = 90;
weight = --weight + 5; // first weight is decremented and then statement is evaluated
console.log(weight); // 94

// postfix increment operator to add one to a variable

let weight = 90;
let newWeight = weight++ + 5; // weight is incremented after the statement is evaluated 

console.log(newWeight); // 95
console.log(weight); // 91

// postfix decrement operator to subtract one from a variable

let weight = 90;
let newWeight = weight-- + 5; // weight is decremented after the statement is evaluated 

console.log(newWeight); // 95
console.log(weight); // 89
