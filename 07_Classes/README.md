<h3>JavaScript Classes:</h3>

Class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

- Classes:
    * `class` keyword is used to declare a new class.
    * are special functions.
    * are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.

- Getters and Setters:
    * ES6 provides specific syntax for defining the getter and setter using the `get` and `set` keywords.
    * the `get` keyword binds an object property to a method that will be invoked when that property is looked up.
    * the `set` keyword binds an object property to a method that will be invoked when that property is assigned.

- Class expressions:
    * alternative way to define a new class.
    * doesn’t require an identifier after the class keyword. And you can use a class expression in a variable declaration and pass it into a function as an argument.
    * can be used to create a singleton object.

- Computed Property:
    * allows to use the values of expressions as property names of an object.
    * ES6 allows to use an expression in brackets `[]`. It’ll then use the result of the expression as the property name of an object.

- Implementing Inheritance using `extends` and `super` keywords in ES6:
    * use the `extends` keyword to implement the inheritance in ES6. The class to be extended is called a `base` class or `parent` class. The class that extends the base class or parent class is called the `derived` class or `child` class.
    * call the `super`  method in the child class’s constructor to invoke the parent class’s constructor.
    * use super keyword to call methods of the parent class in the methods of the child class.
    * besides the properties and methods, the child class also inherits all static properties and methods of the parent class.

- `new.target` Metaproperty:
    * detects whether a function or constructor was called using the `new` operator.
    * very useful to inspect at runtime whether a function is being executed as a function or as a constructor. 

- Static Methods in ES6:
    * static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.
    * static methods can be defined using the `static` keyword.
    * use the `className.staticMethodName()` or `this.constructor.staticMethodName()` to call a static method in a class constructor or an instance method.

- Static Properties:
    * static property of a class is shared by all instances of that class.
    * static property can be defined using the `static` keyword.
    * use the `className.staticPropertyName` to access the static property in a static method.
    * use the `this.constructor.staticPropertyName` or `className.staticPropertyName` to access the static property in a constructor.

- Private Fields:
    * to define private fields for a class, prefix the field name with the `#` sign.
    * are accessible only inside the class, not from outside of the class or subclasses.
    * the `in` operator to check if an object has a private field.

- Private Methodds:
    * to make a public method private, prefix its name with a hash `#`. JavaScript allows us to define private methods for instance methods, static methods, and getter/setters.
    * can be called inside the class, not from outside of the class or in the subclasses.