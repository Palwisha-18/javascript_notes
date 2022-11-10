// logical NOT (!) operator

let eligible = false,
    required = true;

console.log(!eligible); // true
console.log(!required); // false

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false


// double negation (!!)

let counter = 10;
console.log(!!counter); // true


// logical AND (&&) operator 

let eligible = false,
    required = true;

console.log(eligible && required); // false


let eligible = true,
    required = true;

console.log(eligible && required); // true


// logical OR (||) operator 

let eligible = true,
    required = false;

console.log(eligible || required); // true


let eligible = false,
    required = false;

console.log(eligible || required); // false
