// comparing numbers

let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true


// comparing strings

let name1 = 'alice',
    name2 = 'bob';    

let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true


// comparing a number with a value of another type

console.log(10 < '20'); // true
console.log(10 == '10'); // true


// comparing an object with a non-object

let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };

  console.log(apple > 10); // false
  console.log(orange == 20); // true


// comparing a Boolean with another value

console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true


// comparing null and undefined

console.log(null == undefined); // true


// comparing NaN with other values

console.log(NaN == 1); // false
console.log(NaN == NaN); // false
console.log(NaN != 1); // true
console.log(NaN != NaN); // true

// comparing with equal and strict equal

console.log("10" == 10); // true
console.log("10" === 10); // false
