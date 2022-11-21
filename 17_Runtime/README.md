<h3>JavaScript Runtime:</h3>

- Execution Context:
    * when the JavaScript engine executes the JavaScript code, it creates execution contexts.
    * each execution context has two phases: the creation phase and the execution phase.
    * creation phase:
        - when the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:
            * create the global object i.e., `window` in the web browser or `global` in Node.js.
            * create the `this` object and bind it to the global object.
            * setup a memory heap for storing variables and function references.
            * store the function declarations in the memory heap and variables within the global execution context with the initial values as `undefined`.
    * execution phase:
        - the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.
        - for each function call, the JavaScript engine creates a new function execution context.
            * the function execution context is similar to the global execution context. But instead of creating the global object, the JavaScript engine creates the arguments object that is a reference to all the parameters of the function.
        - to keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack.

- Call Stack:
    * JavaScript engine uses a call stack to manage execution contexts.
    * the call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
    * on execution of a script:
        - the JavaScript engine creates a global execution context and pushes it on top of the call stack.
        - whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
        - if a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.
        - when the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.
        - the script will stop when the call stack is empty.

- Event Loop:
    * is a constantly running process that coordinates the tasks between the call stack and callback queue to achieve concurrency.

- Hoisting:
    * occurs during the creation phase of the execution context that moves the variable and function declarations to the top of the script.
    * the JavaScript engine hoists the variables declared using the `let` keyword, but it doesn’t initialize them as the variables declared with the `var` keyword.
    * the JavaScript engine doesn’t hoist the function expressions and arrow functions.

- Variable Scope:
    * scope determines the visibility and accessibility of a variable. JavaScript has three scopes:
        - the global scope
        - Local scope - variables that are declared inside a function are local to the function.
        - Block scope (started from ES6) - variable that are declared inside a block are local to the block.
    * Scope Chain:
        - the way that JavaScript resolves a variable is by looking at it in its current scope, if it cannot find the variable, it goes up to the outer scope, which is called the scope chain.
