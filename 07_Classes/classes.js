// class declaration example

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let john = new Person("John Doe");
let name = john.getName();
console.log(name); // "John Doe"
console.log(typeof Person); // function


// class with get and set methods

class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('Jane Doe');
let name = person.name;

person.name('Jane Smith');
console.log(person.name()); // Jane Smith


// class expressions

let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let person = new Person('John Doe');
console.log(typeof Person); // function


// computed property example

let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank.c); // 3


// extends and super example

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk(); // walking on 2 legs
bird.fly(); // flying


// shadowing methods of parent class in child class

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk(); // go walking

// to call the method of the parent class in the child class, use super.method(arguments)

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking


// inheriting static members

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}

Bird.helloWorld(); // Hello World


// new.target in functions

function Person(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
} // only way to use Person is to instantiate an object from it by using the new operator.


// new.target in constructors

class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee


// static methods in ES6

class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

let anonymous = Person.createAnonymous("male"); 

let person = new Person('James Doe');
let anonymous = person.createAnonymous("male"); // TypeError: person.createAnonymous is not a function


// defining static property in class

class Item {
    static count = 0;
}

console.log(Item.count); // 0


// accessing the static property in a static method

class Item {
    static count = 0;
    static getCount() {
      return Item.count;
    }
  }
  
  console.log(Item.getCount()); // 0


// accessing the static property in a class constructor


class Item {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.constructor.count++;
    }
    static count = 0;
    static getCount() {
      return Item.count;
    }
  }

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount()); // 2


// defining private fields in class using # sign

class Circle {
    #radius;  // private field
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
}

let circle = new Circle(10);
console.log(circle.area); // 314.1592653589793


// using getter and setter to access private fields

class Circle {
    #radius = 0;
    constructor(radius) {
      this.radius = radius;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
  }

  // private fields are inaccessible in subclasses

  class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
      super(radius);
      this.#height = height;
  
      // cannot access the #radius of the Circle class here, will get a SyntaxError
    }
  }


  // the in operator: check private fields exist


  class Circle {
    #radius = 0;
    constructor(radius) {
      this.radius = radius;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
    static hasRadius(circle) {
      return #radius in circle;
    }
  }
  
  let circle = new Circle(10);
  
  console.log(Circle.hasRadius(circle)); // true


  // private instance method example

  class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName()); // John Doe


  // private static method example
  
  class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = Person.#validate(firstName);
      this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length === 3) {
          return str;
        }
      }
      throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
let person = new Person('John', 'Doe');  //throws error: The name must be a string with at least 3 characters
