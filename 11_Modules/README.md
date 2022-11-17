<h3>JavaScript ES6 Modules</h3>

- Module:
    * is a JavaScript file that executes in strict mode only. It means that any variables or functions declared in the module won’t be added automatically to the global scope.
- `export` keyword:
    * used to export a variable, a function, or a class. The `export` keyword is placed in front of it.
    * anonymous function or class cannot be exported.
- `import` keyword:
    * the exported variables, functions, and classes in another module by using the import keyword. 
- Aliasing:
    * JavaScript allows us to create aliases for variables, functions, or classes when you export and import. 
- Re-exporting a binding:
    * possible to export bindings that we have imported.
- Default exports:
    * a module can have one and only one default export. The default export is easier to import. The default for a module can be a variable, a function, or a class.
    * To import both default and non-default bindings, we specify a list of bindings after the import keyword with the following rules:
        - the default binding must come first.
        - the non-default binding must be surrounded by curly braces.
- Dynamic Import:
    * the `import()` allows us to dynamically import a module when needed. It returns a `Promise` that will be fulfilled once the module is loaded completely.
    * `async / await` can be used to handle the result of the `import()`.
    * the `Promise.all()` method  can be used to load multiple modules at once.

- Top-level await module:
    * acts like an `async` function.
    * when a module imports a top-level await module, it waits for the top-level await module to complete before evaluating its body.