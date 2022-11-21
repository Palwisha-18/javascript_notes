// try...catch example

try {
    let result = add(10, 20);
    console.log(result);
  } catch (e) {
    console.log({ name: e.name, message: e.message });
  }
  console.log('Bye');

/*
{name: 'TypeError', message: 'add is not a function'}
Bye
*/

// try…catch…finally statement example

let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

/*
add is not defined
{ result: 0 }
*/

// try…catch…finally and return example

function fn() {
    try {
      return 1;
    } catch {
      return 2;
    } finally {
      return 3;
    }
  }
  
  console.log(fn()); // 3


  // throw statement to throw an exception

  function add(x, y) {
    if (typeof x !== 'number') {
      throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
      throw 'The second argument must be a number';
    }
  
    return x + y;
  }
  
  try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e); // The first argument must be a number
  }
  
// throw statement to throw an instance of the Error class

function add(x, y) {
    if (typeof x !== 'number') {
      throw new Error('The first argument must be a number');
    }
    if (typeof y !== 'number') {
      throw new Error('The second argument must be a number');
    }
  
    return x + y;
  }
  
  try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e.name, ':', e.message); // Error : The first argument must be a number
  }
  

// throw statement to throw a user-defined exception

class NumberError extends Error {
    constructor(value) {
      super(`"${value}" is not a valid number`);
      this.name = 'InvalidNumber';
    }
}



function add(x, y) {
    if (typeof x !== 'number') {
      throw new NumberError(x);
    }
    if (typeof y !== 'number') {
      throw new NumberError(y);
    }
  
    return x + y;
}

try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e.name, ':', e.message); // NumberError : "a" is not a valid number
  }
