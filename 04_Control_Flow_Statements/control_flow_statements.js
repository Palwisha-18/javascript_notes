// if statememt

let age = 18;
if (age >= 18) {
  console.log('You can sign up');
} // You can sign up


// if ... else statement

let age = 16;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
} // You must be at least 18 to sign up.


// if ... else ... if statement

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName); // Jun

// using ternary operator to perform single statement

let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message); // You can drive.


// using ternary operator to perform multiple statements

let authenticated = true;
let nextURL = authenticated
  ? (alert('You will redirect to admin area'), '/admin')
  : (alert('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'


// multiple ternary operators

let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message); // Fast


// switch case

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday


// while loop

let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
} // 1 3 5 7 9


// do ... while loop

let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5) // 0 1 2 3 4


// simple for loop
     //initializer; condition; iterator
for (let i = 1; i < 5; i++) {
  console.log(i);
}  // 1 2 3 4


// for loop without the initializer

let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
} // 1 3 5 7 9


// for loop without the condition

for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) {
    break;
  }
} // 1 3 5 7 9 11 

// for loop statement without any expression

let j = 1;
for (;;) {
  if (j > 10) {
    break;
  }
  console.log(j);
  j += 2;
} // 1 3 5 7 9 


// for loop without the loop body

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); // 55


// break statement

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
} // 0 1 2


// label statement with break

outer: for (let i = 1; i <= 3; i++) { // outer is the label
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer; // breaks outer loop
    }
    console.log(i, j);
  }
} 
/* 
1 1
1 2
*/

// continue statement

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
} // 1 3 5 7 9


// comma operator

let x = 10;
let y = (x++, x + 1);

console.log(x, y); // 11, 12
