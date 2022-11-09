// Addition Operator

let sum = 10 + 20;
console.log(sum); // 30


let x = '10',
    y = '20';
let result = x + y;
console.log(result); //1020


let result = 10 + '20';
console.log(result); //1020  


// Subtraction Operator

let result = 30 - 10;
console.log(result); // 20

let result = '30' - 10;
console.log(result); // 20


// Multiplication Operator

let result = 2 * 3;
console.log(result); // 6


let result = '5' * 2;
console.log(result); //10


// Divide Operator

let result = 20 / 10;
console.log(result); // 2


let result = '20' / 2;
console.log(result); // 10;


// Arithmetic Operator with objects

let power = {
    valueOf() {
      return 1000;
    },
  };
  
  let currentPower = power - 100; // 900
  console.log(currentPower);
  
  currentPower = power + 100; // 1100
  console.log(currentPower);
  
  currentPower = power / 2; // 500
  console.log(currentPower);
  
  currentPower = power * 1.5; 
  console.log(currentPower); // 1500


  let power = {
    toString() {
      return 1000;
    },
  };
  
  let currentPower = power - 100; // 900
  console.log(currentPower);
  
  currentPower = power + 100; // 1100
  console.log(currentPower);
  
  currentPower = power / 2; // 500
  console.log(currentPower);
  
  currentPower = power * 1.5; 
  console.log(currentPower); // 1500
  