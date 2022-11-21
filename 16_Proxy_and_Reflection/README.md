<h3>JavaScript Proxy and Reflection:</h3>

- Proxy:
    * is an object that wraps another object (target) and intercepts the fundamental operations of the target object.
    * the fundamental operations can be the property lookup, assignment, enumeration, and function invocations, etc.
- Proxy Traps:
    * `get()` trap is fired when a property of the `target` object is accessed via the proxy object.
    * `set()`  trap controls behavior when a property of the `target` object is set.
    * `apply()` trap is a trap for a function call.
    * `construct` – traps usage of the new operator
    * `getPrototypeOf` – traps an internal call to `[[GetPrototypeOf]]`
    * `setPrototypeOf` – traps a call to `Object.setPrototypeOf`
    * `isExtensible` – traps a call to `Object.isExtensible`
    * `preventExtensions` – traps a call to `Object.preventExtensions`
    * `getOwnPropertyDescriptor` – traps a call to `Object.getOwnPropertyDescriptor`


- Reflection:
    * is the ability of a program to manipulate variables, properties, and methods of objects at runtime.
    * `Reflect` global object that allows us to call methods, construct objects, get and set properties, manipulate and extend properties.
    * is important because it allows us to develop programs and frameworks that are able to handle dynamic code.
    * `Reflect.apply()` – call a function with specified arguments.
    * `Reflect.construct()` – act like the new operator, but as a function. It is equivalent to calling new `target(...args)`.
    * `Reflect.defineProperty()` – is similar to `Object.defineProperty()`, but return a `Boolean` value indicating whether or not the property was successfully defined on the object.
    * `Reflect.deleteProperty()` – behave like the delete operator, but as a function. It’s equivalent to calling the `delete objectName[propertyName]`.
    * `Reflect.get()` – return the value of a property.
    * `Reflect.getOwnPropertyDescriptor()` – is similar to `Object.getOwnPropertyDescriptor()`. It returns a property descriptor of a property if the property exists on the object, or undefined otherwise.
    * `Reflect.getPrototypeOf()` – is the same as `Object.getPrototypeOf()`.
    * `Reflect.has()` – work like the in operator, but as a function. It returns a boolean indicating whether an property (either owned or inherited) exists.
    * `Reflect.isExtensible()` – is the same as `Object.isExtensible()`.
    * `Reflect.ownKeys()` – return an array of the owned property keys (not inherited) of an object.
    * `Reflect.preventExtensions()` – is similar to `Object.preventExtensions()`. It returns a Boolean.
    * `Reflect.set()` – assign a value to a property and return a Boolean value which is true if the property is set successfully.
    * `Reflect.setPrototypeOf()` – set the prototype of an object.