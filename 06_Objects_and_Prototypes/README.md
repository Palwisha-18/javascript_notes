<h3>JavaScript Objects and Prototypes:</h3>

An object is a collection of key/value pairs or `properties`.

- Object Methods:
    * when the value of an object is a function, the property becomes a `method`
- `this` keyword:
    * inside a method, the `this` value references the object that invokes the method.
    * in the global context, the `this` references the global object, which is the `window` object on the web browser

- Constructor functions:
    * regular function used to create multiple similar objects.
        - the name of a constructor function starts with a capital letter.
        - a constructor function should be called only with the `new` operator.

- Prototypes:
    * every object has its own property called prototype.
    * the `Object.prototype` object has all properties and methods which are available in all objects such as `toString()` and `valueOf()`.
    * the `Object.prototype` object has the constructor property that references the Object function.
    * every function has a prototype object. This prototype object references the `Object.prototype` object via `[[prototype]]` linkage or `__proto__` property.
    * the prototype chain allows one object to use the methods and properties of its prototype objects via the `[[prototype]]` linkages.
    * the `Object.getPrototypeOf()` method returns the prototype object of a given object. Do use the `Object.getPrototypeOf()` method instead of `__proto__`.

- Constructor/Prototype Pattern:
    * constructor pattern defines the object properties and prototype pattern defines the object methods.
    * all objects of the custom type share the methods defined in the prototype. Also, each object has its own properties.

- Classes in ES6:
    * the `class` keyword that makes the constructor/prototype pattern easier to use. 
    * the `class` moves the property initialization to the `constructor` method. It also packs the `method` in the same place as the constructor function.

- Prototypal inheritance:
    * an object “inherits” properties from another object via the prototype linkage.
    * the `Object.create()` method creates a new object and uses an existing object as a prototype of the new object

- Object Properties:
    * have two types of properties: data properties and accessor properties.
    * JavaScript uses internal attributes denoted by `[[...]]` to describe the characteristics of properties such as `[[Configurable]]`, `[[Enumerable]]`, `[[Writable]]`, and  `[[Value]]`, `[[Get]]`, and `[[Set]]`.
    * the method `Object.getOwnPropertyDescriptor()` return a property descriptor of a property in an object.
    * a property can be defined directly on an object or indirectly via the `Object.defineProperty()` or `Object.defineProperties()` methods. These methods can be used to change the attributes of a property.

- `for...in` loop:
    * used to iterate over the enumerable properties of an object. It also goes up to the prototype chain and enumerates inherited properties.

- Enumerable Properties:
    * a property created via a simple assignment or a property initializer is enumerable.

- Own property:
    * property that is directly defined on an object is an own property.
    * the obj.hasOwnProperty() method determines whether or not a property is own.

- `Object.values()` method:
    * returns own enumerable properties while the for...in loop iterates properties in the prototype chain.

- `Object.entries()` method:
    * accepts an object and returns its own enumerable string-keyed property `[key, value]` pairs of the object.

- `Object.assign()` method:
    * copies all enumerable and own properties from the `source` objects to the `target` object. It returns the `target` object.
    * can be used to clone an object or merge objects.
    * only carries a shallow clone, not a deep clone.

- `Object.is()` method:
    * to check if two values are the same.
    * behaves like the `===` operator with two differences:
        - -0 and +0
        - NaN

- Factory function:
    * a function creates and returns a new object.

- Optional Chaining Operator (`?.`):
    * allows to access the value of a property located deep within a chain of objects without explicitly checking if each reference in the chain is null or undefined.
    * combine with the nullish coalescing operator (`??`) to assign a default value.
