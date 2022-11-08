// undefined data type

let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined

// null data type

let obj = null;
console.log(typeof obj); // object (The typeof null returns object is a known bug in JavaScript)

console.log(null == undefined); // true

// number data type

let num = 100;
let price= 12.5; 
let discount = 0.05;

// NaN data type

console.log('a'/2); // NaN

console.log(NaN/2); // NaN (Any operation with NaN returns NaN)

console.log(NaN == NaN); // false (The NaN does not equal any value, including itself)

// string data type

let greeting = 'Hi';

let message  = "Bye";

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String'; // JavaScript String

let s = 'JavaScript';
s[0] = 'j';
console.log(s) // JavaScript (strings are immmutable)

// boolean data type

let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

// symbol data type

let s1 = Symbol();

console.log(Symbol() == Symbol()); // false (The Symbol function creates a new unique value every time you call it)

// bigint data type

let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

// object data type

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName); // use dot . notation to access properties
console.log(contact.lastName);

console.log(contact['phone']); // or Use array [] notation to access properties
console.log(contact['email']); 

console.log(contact.age); // undefined
