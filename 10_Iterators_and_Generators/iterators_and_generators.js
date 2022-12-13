// for...of loop on an iteraable object (array)

let ranks = ['A', 'B', 'C'];

for (rank of ranks) {
    console.log(rank);
}
/*
A
B
C
*/

// generator function example

function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate();
let result = gen.next();
console.log(result);
/*
invoked 1st time
{ value: 1, done: false }
*/

result = gen.next();
console.log(result);

/*
invoked 2nd time
{ value: 2, done: false }
*/

result = gen.next();
console.log(result);

/*
{ value: undefined, done: true }
*/

// array destructing example

let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

/*
Red is at index 0
Green is at index 1
Blue is at index 2
*/

//  in-place object destructuring with for…of example

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // Total scores: 14


// async iterator example

let range = {
    from: 1,
    to: 5,
  
    [Symbol.asyncIterator]() { 
      return {
        current: this.from,
        last: this.to,
  
        async next() {
  
          // note: we can use "await" inside the async next:
          await new Promise(resolve => setTimeout(resolve, 1000)); 
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
};
  
(async () => {
  
    for await (let value of range) { 
      alert(value);
    }
  
})()

/*
returns a sequence from 1 to 5 after every second
1
2
3
4
5
*/

// async generator example

async function* asyncSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });

    }
}

(async () => {
    let seq = asyncSequence(1, 5);

    for await (let num of seq) {
        console.log(num);
    }
})();
/*
returns a sequence from 1 to 5 after every second
1
2
3
4
5
*/
