<h3>JavaScript Iterators and Generators:</h3>

- Iterator:
    * an object is qualified as an iterator when it has a `next()` method that returns an object with two properties:
        - `done`: a boolean value indicating whether or not there are any more elements that could be iterated upon.
        - `value`: the current element.
    * ES6 provides built-in iterators for the collection types  `Array`, `Set`, and `Map`.
    * the `for...of` loop has the ability to create a loop over any iterable object.
    * allows us to access data sequentially.

- Generators:
    * are created by the generator function `function* f(){}`.
    * do not execute its body immediately when they are invoked.
    * can pause midway and resumes their executions where they were paused. The `yield` statement pauses the execution of a generator and returns a value.
    * are iterable so you can use them with the `for...of` loop.

- Asynchronous Iterator:
    * is like an iterator except that its `next()` method returns a `promise` that resolves to the `{value, done}` object.
    * `for await...of` statement is used to iterate over async iterators.

- Asynchronous Generator:
    * is like a generator except that its `next()` method returns a `promise`.
    * `for await...of` statement is used to iterate over async generators.
