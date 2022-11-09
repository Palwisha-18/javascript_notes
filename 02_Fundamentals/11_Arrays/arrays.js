// using Array constructor to intialize array object

let athletes = new Array(3); // creates an array with initial size 3
let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

// using array literal notation to create an array

let colors = ['red', 'green', 'blue'];

// accessing array elements

console.log(colors[0]); // 'red'

// to change the value of an element
colors[2] = 'orange';

console.log(colors); // ['red', 'green', 'orange']

// getting the array size

console.log(colors.length); // 3

// adding an element to the end of an array

colors.push('yellow'); // ['red', 'green', 'orange', 'yellow']

// adding an element to the beginning of an array

colors.unshift('blue'); // ['blue', 'red', 'green', 'orange', 'yellow']

// removing an element from the end of an array

colors.pop(); // 'yellow'

// removing an element from the beginning of an array

colors.shift(); // 'blue' 

// finding index of an element

colors.indexOf('green'); // 1

// check if a value is an array

console.log(Array.isArray(colors)); // true
