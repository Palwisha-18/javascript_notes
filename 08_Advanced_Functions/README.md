<h3>JavaScript Advanced Functions:</h3>

- All functions are instances of the Function type, which are the objects that have properties and methods. Function can also be called with `new` operator.
- A function has two important properties: `length` and `prototype`.
- A function also has three important methods: `call()`, `apply()`, and `bind()`. Also known as borrowing functions.
- The `apply()` and `call()` methods call a function with a given this value and arguments.
    * the difference between the `apply()` and `call()` is that we need to pass the arguments to the `apply()` method as an array-like object, whereas we pass the arguments to the `call()` function individually. 
- The `bind()` method creates a new function instance whose `this` value is bound to the object that you provide.
- Lexical scoping defines the scope of a variable by the position of that variable declared in the source code. 
    * the scopes can be nested and the inner function can access the variables declared in its outer scope.
- Closure is a combination of a function and its ability to remember variables in the outer scope.
- Immediately Invoked Function Expression (IIFE) is a function defined as an expression and executed immediately after creation.
- JavaScript doesn’t support functions that return multiple values. However, we can wrap multiple values into an array or an object and return the array or the object.
- Use destructuring assignment syntax to unpack values from the array, or properties from objects.

- Arrow function:
    * Use the `(...args) => expression;` to define an `arrow` function.
    * Use the `(...args) => { statements }` to define an `arrow` function that has multiple statements.
    * doesn’t have its binding to `this` or `super`.
    * doesn’t have `arguments` object, `new.target` keyword, and `prototype` property.
    * do not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object.

- Rest parameters:
    *  has a prefix of three dots `(...)`.
    * allows us to represent an indefinite number of arguments as an array.
    * must appear at the end of the argument list.

- Callback function:
    * is a function that we pass into another function as an argument for executing later.
    * a synchronous callback is executed during the execution of the high-order function that uses the callback. A high-order function is a function that accepts another function as an argument.
    * an asynchronous callback is executed after the execution of the high-order function that uses the callback.