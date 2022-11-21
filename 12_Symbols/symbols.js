// Symbol example

let s = Symbol('foo');

// Symbol() func creates a new unique value each time

console.log(Symbol() === Symbol()); // false

// sharing symbols

let ssn = Symbol.for('ssn');
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true
console.log(Symbol.keyFor(citizenID)); // 'ssn'
