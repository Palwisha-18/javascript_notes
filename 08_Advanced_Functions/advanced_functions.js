// function and its properties example

function add(x, y) {
    return x + y;
}

console.log(add.length); // 2
console.log(add.prototype); // Object{}

// function apply() method example

let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const say = function (message) {
  console.log(message);
  console.log(this.type + ' says ' + this.sound);
};

say.apply(cat, ['What does a cat say?']); // this object in the say() function references the cat object.
say.apply(dog, ['What does a dog say?']); // this object in the say() function references the dog object.

/* What does a cat say?
Cat says Meow
What does a dog say?
Dog says Woof */

// function call() method example

say.call(cat, 'What does a cat say?'); // The call() method is like the apply() method except for the way we pass the arguments to the function
say.call(dog, 'What does a dog say?'); 


// function bind() method example

let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};
/* 
The aircraft has no start() method.
To start an aircraft, we can use the bind() method of the start() method of the car object
*/
let taxiing = car.start.bind(aircraft); 
taxiing(); // Start with 10 km/h


// closures example

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable


// iife example

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum); // 30

// returning multiple values from a function using an array

function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}
let names = getNames();
const [firstName, lastName] = getNames(); // John, Doe


// returning multiple values from an function using an object

function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';
  
    // return values
    return { firstName, lastName };
  }

  let { firstName, lastName } = getNames(); // John, Doe

  // arrow function example

  let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;

// rest parameters example

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

sum(1, 2, 3); // 6


// callback function example

function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });
  
  console.log(oddNumbers); // 1, 7, 3, 5
  