// let keyword example

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

// let keyword doesnt have global scope

for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

/*
Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4

Uncaught ReferenceError: i is not defined*/



// var keyword exmaple

for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

/*
Inside the loop: 0 
Inside the loop: 1 
Inside the loop: 2 
Inside the loop: 3 
Inside the loop: 4 
Outside the loop: 5
*/

// const keyword example

let a = 10;
a = 20;
a = a + 5;
console.log(a); // 25
