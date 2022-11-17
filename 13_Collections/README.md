<h3>JavaScript Collections:</h3>

- `Map` object:
    * holds key-value pairs. Keys are unique in a Map’s collection.
    * keys and values of a Map can be any values.
    * when iterating a Map object, each iteration returns a 2-member array of `[key, value]`. The iteration order follows the insertion order which corresponds to the order in which each key-value pair was first inserted into the Map by the `set()` method.
    * Map mthods:
        - `clear()` – removes all elements from the map object.
        - `delete(key)` – removes an element specified by the key. It returns if the element is in the map, or false if it does not.
        - `entries()` – returns a new Iterator object that contains an array of `[key, value] `for each element in the map object. The order of objects in the map is the same as the insertion order.
        - `forEach(callback[, thisArg])` – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the `this` value for each callback.
        - `get(key)` – returns the value associated with the key. If the key does not exist, it returns undefined.
        - `has(key)` – returns true if a value associated with the key exists or false otherwise.
        - `keys()` – returns a new Iterator that contains the keys for elements in insertion order.
        - `set(key, value)` – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.
        - `values()` returns a new iterator object that contains values for each element in insertion order.

- `WeakMap` object:
    * the keys of a WeakMap must be objects. It means that when a reference to a key (an object) is out of scope, the corresponding value is automatically released from the memory.
    * only has subset methods of a `Map` object:
        - `get(key)`
        - `set(key, value)`
        - `has(key)`
        - `delete(key)`
    * elements of a WeakMap cannot be iterated.
    * cannot clear all elements at once.
    * cannot check the size of a WeakMap.
