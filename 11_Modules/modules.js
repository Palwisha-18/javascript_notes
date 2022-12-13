// exporting example

// log.js module
export let message = 'Hi';

export function getMessage() {
  return message;
}

export function setMessage(msg) {
  message = msg;
}

export class Logger {
}

// importing example

import {message, setMessage} from './log.js';


// importing an entire module as an object

import * as log from './log.js';


// aliasing example

// math.js  
function add( a, b ) {
    return a + b;
 }
 
export { add as sum }; // exporting add function as sum
 
// re-exporting a binding

import { sum } from './math.js';
export { sum };


// default exports

// sort.js
export default function(arr) {
    // sorting here
}
export function heapSort(arr) {
    // heapsort
}

import sort, {heapSort} from './sort.js';
sort([2,1,3]);
heapSort([3,1,2]);


// dynamic import

// dialog.js
export function show(message) {
    alert(message);

}

export function hide(message) {
    console.log('Hide it...');
}


let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    (async () => {
        try {
            // use object destructuring
            let {
                show,
                hide
            } = await import('./dialog.js');

            // use the functions
            show('Hi');
            hide();
        } catch (err) {
            console.log(err);
        }
    })();

});

// top-level await example

// users.mjs

const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export { users };

// app.js
import { users } from './user.mjs';

function render(users) {
  if (!users) {
    throw 'The user list is not available.';
  }
  let list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    })
    .join(' ');

  return `<ol>${list}</ol>`;
}

let container = document.querySelector('.container');

try {
  container.innerHTML = render(users);
} catch (error) {
  container.innerHTML = error;
} // the app.mjs module will wait for the user.mjs module to complete before executing its body.
