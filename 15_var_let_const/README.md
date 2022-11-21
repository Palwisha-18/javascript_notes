<h3>JavaScript var, let and const:</h3>

- `let` keyword:
    * variables declared using the `let` keyword are block-scoped, are not initialized to any value, and are not attached to the global object.
    * redeclaring a variable using the `let` keyword will cause an error.
    * a temporal dead zone of a variable declared using the `let` keyword starts from the block until the initialization is evaluated.
        - in the creation phase, the JavaScript engine assigns storage spaces to the `let` variables but does not initialize the variables. Referencing uninitialized variables will cause a ReferenceError.
        - the `let` variables have the same execution phase as the `var` variables.

    
- `var` keyword:
    * variables belong to the global scope when you define them outside a function.
    * allows you to redeclare a variable without any issue.
    * do not have a temporal dead zone.
        - in the creation phase, the JavaScript engine assigns storage spaces to `var` variables and immediately initializes them to undefined.
        - in the execution phase, the JavaScript engine assigns the `var` variables the values specified by the assignments if there are ones. Otherwise, the `var` variables remain undefined.
- `const` keyword:
    * creates a read-only reference to a value. The readonly reference cannot be reassigned but the value can be change.
    * the variables declared by the `const` keyword are blocked-scope and cannot be redeclared.
