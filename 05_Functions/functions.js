// declaring a function

function say(message) {
    console.log(message);
}


// calling a function

say('Hello'); // Hello


// returning a value from a fucntion using return keyword

function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log('Sum:', sum); // Sum: 30


// the arguments object in functions

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15


// function hoisting

showMe(); // a hoisting example

function showMe(){
    console.log('a hoisting example');
}


// storing functions in variables

function add(a, b) {
    return a + b;
}

let sum = add;
let result = sum(10,20); // 30

// passing a function to another function

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);
console.log(result); // 15


// returning functions from functions

function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
  ];
  
  // sort products by name
  console.log('Products sorted by name:');
  products.sort(compareBy('name'));
  
  console.table(products);
  
/*

Products sorted by name:
┌─────────┬──────────────────┬───────┐
│ (index) │       name       │ price │
├─────────┼──────────────────┼───────┤
│    0    │ 'Samsung Galaxy' │  850  │
│    1    │  'Sony Xperia'   │  700  │
│    2    │     'iPhone'     │  900  │
└─────────┴──────────────────┴───────┘
*/


// anonymous function

let show = function() {
    console.log('Anonymous function');
};

show(); // Anonymous function


// anonymous functions as arguments

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000); // The setTimeout() function executes this anonymous function one second later.


// immediately invoked function execution

(function() {
    console.log('IIFE');
})(); // IIFE


// arrow functions

let add = (a, b) => a + b;   


// pass-by-value of primitives values

function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change


// pass-by-value of reference values

let person = {
    name: 'John',
    age: 25,
  };
  
function increaseAge(obj) {
    obj.age += 1;
  }
  
increaseAge(person);
  
console.log(person.age);  // 26

  // recursive function

function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  } 

sum(5); // 15

// default function parameters

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'
