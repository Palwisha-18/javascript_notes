// creating Map object

let userRoles = new Map();


let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

// add elements to a Map

userRoles.set(john, 'admin');
userRoles.set(lily, 'editor')
          .set(peter, 'subscriber'); // set method is chainable

// initializing a map with an iterable object


let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

// get an element from a map by key

userRoles.get(john); // admin

// check the existence of an element by key

userRoles.has(foo); // false
userRoles.has(lily); // true

// get the number of elements in the map

console.log(userRoles.size); // 3


// iterating over map keys

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const user of userRoles.keys()) {
  console.log(user.name);
}

/* 
John Doe
Lily Bush
Peter Drucker
*/

// iterating over map values

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (let role of userRoles.values()) {
  console.log(role);
}

/*
admin
editor
subscriber
*/


// iterating over map elements

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`);
}

/*
John Doe: admin
Lily Bush: editor
Peter Drucker: subscriber
*/

// deleting an element by key

userRoles.delete(john);
console.log(userRoles.size); // 2

// deleting all elements in the map

userRoles.clear();
console.log(userRoles.size); // 0


// creating Set object

let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars); // Set { 'a', 'b', 'c' }


// getting the size of a Set

let size = chars.size;
console.log(size);//  3


// adding elements to a Set

chars.add('d');
console.log(chars); // Set { 'a', 'b', 'c', 'd' }


// check if a value is in the Set

let exist = chars.has('a');
console.log(exist);// true


exist = chars.has('z');
console.log(exist); // false


// removing elements from a set

chars.delete('f');
console.log(chars); // Set {"a", "b", "c", "d", "e"}

// deleting all elements from a set

chars.clear();
console.log(chars); // Set{}


// looping the elements of a JavaScript Set

let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

for (let role of roles) {
        console.log(role);
} 
/*
admin
editor
subscriber
*/

// WeakSet example

let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server'); // We have a server
}
