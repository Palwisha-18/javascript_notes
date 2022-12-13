// primitive values

let name = 'John';
let age = 25;

// reference values

let person = {
    name: 'John',
    age: 25,
  };

// reference value allows you to add, change, or delete properties at any time

person.ssn = '123-45-6789';
person.name = 'John Doe';
delete person.age;
  
// copying primitive values

let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge); // 25, 26

// copying reference values

let person = {
    name: 'John',
    age: 25,
  };
  
let member = person;
  
member.age = 26;
  
console.log(person.age);  // 26
console.log(member.age);  // 26
