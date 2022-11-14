// object methods

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet(); // Hello!


// object method shorthand in ES6 

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person.greet(); // Hello, World!


// this example

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName()); // John Doe


// constructor function

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
let person = new Person('John','Doe');


// adding methods to JavaScript constructor functions

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("John", "Doe");
console.log(person.getFullName()); // John Doe

// prototype example

typeof(Object) // function
console.log(Object.prototype.constructor === Object); // true


// constructor / prototype example

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

let p1 = new Person("John", "Doe");
let p2 = new Person("Jane", "Doe");

console.log(p1.getFullName()); // 'John Doe'
console.log(p2.getFullName()); // 'Jane Doe'

// class example

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName()); // 'John Doe'
console.log(p2.getFullName()); // 'Jane Doe'


// prototypal inheritance

let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

let teacher = Object.create(person);
teacher.name = 'Jane Doe';
teacher.teach = function (subject) {
        return "I can teach " + subject;
}
console.log(Object.getPrototypeOf(teacher) === person); // true

// defining multiple properties using Object.defineProperties()

var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');  // The net price of a Smartphone is 878.90 USD

// object property descriptor

let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor); 
/* 
{ value: 'John',
  writable: true,
  enumerable: true,
  configurable: true }
*/


// for .. in loop

var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}
/*
firstName:John
lastName:Doe
ssn:299-24-2351
*/

// for...in loop & Inheritance

var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;


for(const prop in circle) {
    console.log(prop);
}
/*
radius
color
*/


// enumerating only the own properties of an object using hasOwnProperty()

for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log(prop);
    }
} // radius


// enumerable properies example

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;

for (const key in person) {
    console.log(key);
}
/*
firstName // firstName and lastName are enumerable properties because they are created via a property initializer.
lastName
age // age property is also enumerable because it is created via a simple assignment.
*/


// own propery example

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const employee = Object.create(person, {
    job: {
        value: 'JS Developer',
        enumerable: true
    }
});

console.log(employee.hasOwnProperty('job')); // => true
console.log(employee.hasOwnProperty('firstName')); // => false
console.log(employee.hasOwnProperty('lastName')); // => false
console.log(employee.hasOwnProperty('ssn')); // => false


// .values() method example

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person);

console.log(profile); // [ 'John', 'Doe', 25 ]

// .entries() method example

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);

console.log(kv);
/*
[
    ['firstName', 'John'],
    ['lastName', 'Doe'],
    ['age', 25]
]
*/

// using Object.assign() to clone an object

let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget); // { color: 'red' }


// using Object.assign() to merge objects

let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

/*
{
    height: 10,
    width: 20,
    color: 'Red',
    borderStyle: 'solid'
}
*/


// Object.is() example

let amount = +0,
    volume = -0;
console.log(volume === amount); // true

let amount = +0,
    volume = -0;
console.log(Object.is(amount, volume)); // false

let quantity = NaN;
console.log(quantity === quantity); // false

let quantity = NaN;
console.log(Object.is(quantity, quantity));  // true

// factory function example

function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');
  
console.log(person1.getFullName()); // 'John Doe'
console.log(person2.getFullName()); // 'Jane Doe'

// optional chaining operator example

function getUser(id) {

    if(id <= 0) {
        return null;
    }

    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}

let user = getUser(0);
let profile = user ?. profile; // undefined

// combining optional chaining operator with the nullish coalescing operator

let defaultProfile =  { default: '/default.png', language: 'English'};

let user = getUser(2);
let profile = user ?. profile ?? defaultProfile; // { default: '/default.png', language: 'English'}
