// exponentiation operator with numbers

let result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8

// exponentiation operator with bigint

let result = 2n ** 3n;
console.log(result); // 8n

// unary operator immediately before the base number gives syntax error

let result = -2**3; // SyntaxError

let result = (-2)**3; // correct method
console.log(result); // -8
