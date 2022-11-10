// using the remainder operator with positive dividend example

let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

// using the remainder operator with negative dividend example

let remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

// using the remainder operator special values

let remainder = Infinity % 2;
console.log(remainder); // NaN

let remainder = 10 % 0;
console.log(remainder); // NaN

let remainder = Infinity % Infinity;
console.log(remainder); // NaN

let remainder = 10 % Infinity;
console.log(remainder); // 10

let remainder = 0 % 10;
console.log(remainder); // 0

let remainder = '10' % 3;
console.log(remainder); // 1

// difference between remainder and modulo

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividend and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividend and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1
