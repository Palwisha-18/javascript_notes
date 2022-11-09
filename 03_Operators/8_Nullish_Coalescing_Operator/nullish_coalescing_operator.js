// nullish coalescing operator

const name = null ?? 'John';
console.log(name); // 'John'

const age = undefined ?? 28;
console.log(age);


// nullish coalescing operator is short-circuited

let result = undefined ?? console.log('Hi'); // 'Hi'


// chaining with the AND or OR operator

const result = null || undefined ?? 'OK'; // SyntaxError

const result = (null || undefined) ?? 'OK'; 
console.log(result); // 'OK'
