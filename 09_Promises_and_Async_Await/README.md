<h3>JavaScript Promises and Async/Await</h3>

- Promise:
    * is an object that encapsulates the result of an asynchronous operation.
    * starts in the pending state and ends in either fulfilled state or rejected state.
    * `then()` method is used to schedule a callback to be executed when the promise is fulfilled.
    * `catch()` method to schedule a callback to be invoked when the promise is rejected.
        - inside the promise, the `catch()` method will catch the error caused by the `throw` statement and `reject()`.
        - if an error occurs and you don’t have the catch() method, the JavaScript engine issues a runtime error and stops the program.
    * `finally()` method is called whether the promise is fulfilled or rejected.

- Promise Chaining:
    * for executing two or more related asynchronous operations, where the next operation starts with the result from the previous step.

- `Promise.all()` method:
    * accepts a list of promises and returns a new promsie that resolve to an array of results of the input promises if all the input promises resolved; or reject with an error of the first rejected promise.

- `Promise.race()` method:
    *  returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.

- `Promise.any()` method:
    * takes a list of promises and return a promise that fulfills first.

- `Promise.allSettled()` method:
    * accepts an iterable of promises and returns a new promise that resolves when every input promise has settled with an array of objects that describes the result of each promise in the iterable object.

- `async / await` keywords:
    * `async` keyword allows us to define a function that handles asynchronous operations.
        - asynchronous functions execute asynchronously via the event loop. It always returns a Promise. 
    * `await` keyword is used to wait for a Promise to settle either in resolved or rejected state. It is only inside an async function.