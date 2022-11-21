// a simple proxy example

const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
}

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}


const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

user.firstName = 'Jane';
console.log(proxyUser.firstName); // change reflects in proxy object
/*
Property firstName has been read.
Jane
*/


proxyUser.lastName = 'William';
console.log(user.lastName); // William // Change reflected in original object


// get() trap example

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const handler = {
    get(target, property) {
        return property === 'fullName' ?
            `${target.firstName} ${target.lastName}` :
            target[property];
    }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.fullName); // John Doe


// set() trap example

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
}

const handler = {
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age must be a number.');
            }
            if (value < 18) {
                throw new Error('The user must be 18 or older.')
            }
        }
        target[property] = value;
    }
};

const proxyUser = new Proxy(user, handler);
proxyUser.age = 'foo';  // Error: Age must be a number.
proxyUser.age = '16';   // The user must be 18 or older.


// the apply() trap

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}


const getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    }
});

console.log(getFullNameProxy(user)); // JOHN DOE


// creating objects: Reflect.construct() example

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let args = ['John', 'Doe'];

let john = Reflect.construct(
    Person,
    args
);

console.log(john instanceof Person); // true
console.log(john.fullName); // John Doe


// calling a function: Reflect.apply() example

let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
console.log(result); // 30
