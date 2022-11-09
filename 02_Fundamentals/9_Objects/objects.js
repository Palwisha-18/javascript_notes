// object literal notation for createing empty object

let empty = {};

// to create an object with properties, we use the key:value within the curly braces

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// if a property name contains spaces, we need to place it inside quotes

let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

// to access the 'building no' property, you need to use the array-like notation. dot notation will throww an error in this case

address['building no'];

// modifying the value of a property

console.log(address.state);  // CA
address.state = 'PA'
console.log(address.state);  // PA

// adding a new property to an object

address.zipcode = 1234;

// deleting a property of an object

delete address.zipcode;

// checking if a property exists

console.log('zipcode' in address); // falses
