// promisses example with then() method

function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
}
  
const promise = getUsers();

promise.then((users) => {
console.log(users);
});
/* 
[
{ username: 'john', email: 'john@test.com' },
{ username: 'jane', email: 'jane@test.com' }
]
*/

// promise chaining example

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
});

// returning a Promise

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 3 * 1000);
    });
}).then((result) => {
    console.log(result); // 20
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 3);
        }, 3 * 1000);
    });
}).then(result => console.log(result)); // 60

// resolved promises Promise.all() example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
    }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);

    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
});

/*
The first promise has resolved
The second promise has resolved
The third promise has resolved
Results: 10,20,30
Total: 60
*/


// rejected promises Promise.all() example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject('Failed');
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});


Promise.all([p1, p2, p3])
    .then(console.log) // never execute
    .catch(console.log);

/* 
The first promise has resolved
The second promise has rejected
Failed
The third promise has resolved
*/

// Promise.race() example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

/*
The first promise has resolved
Resolved: 10
The second promise has rejected
*/

// Promise.any() example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 rejected');
      reject('error');
    }, 1000);
});
  
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);
});
  
const p = Promise.any([p1, p2]);
p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
});

/*
Promise 1 rejected
Promise 2 fulfilled
Returned Promise
2
*/

// Promise.allSettled() example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result);
    });
/*
The first promise has resolved
The second promise has rejected'
[
    {status: "fulfilled", value: 10},
    {status: "rejected", reason: 20},
]
*/


// async/await example

async function sayHi() {
    return 'Hi';
}

async function display() {
    let result = await sayHi(); // Waiting for this to complete
    console.log(result);
}
