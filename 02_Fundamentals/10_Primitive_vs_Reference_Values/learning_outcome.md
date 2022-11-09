<h3>JavaScript Primitive vs. Reference Values:</h3>

- primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.
- primitive values include `null, undefined, boolean, number, string, symbol, and BigInt`.
- reference values refer to `objects`.
- copying a primitive value from one variable to another creates a separate value copy.
 It means that changing the value in one variable does not affect the other.
- copying a reference from one variable to another creates a reference so that two variables refer to the same object.
 This means that changing the object via one variable reflects in another variable.
 - static data has a size that does not change, a fixed amount of memory space is allocated to the static data and is stored on the `stack`.
 - primitive values are stored on stack while reference values like objects and functions are stored on heap memory. 
 - we can add, change, or delete properties to a reference value, whereas we cannot do it with a primitive value.
 