// ------------------------------------IIFE------------------------------

// const logPassedTime = (function logPassedTimeIIFE() {
//   const timestamp = Date.now();

//   return function logger() {
//     console.log(Date.now() - timestamp);
//   };
// })();

// for (let i = 0; i < 10_000_000; i++) {}

// logPassedTime();

// ------------------------------------Math module 1------------------------------
// ('use strict');

// const mathModule = (function () {
//   return {
//     add(a, b) {
//       return a + b;
//     },
//     subtract(a, b) {
//       return a - b;
//     },
//     divide(a, b) {
//       return a / b;
//     },
//     multiply(a, b) {
//       return a * b;
//     },
//   };
// })();

// console.log(mathModule.add(2, 3));

// ------------------------------------Math module 2------------------------------

// ('use strict');

// const mathModule = (function () {
//   let lastOperation;
//   let lastB;
//   let lastResult;

//   function cacheLastOperation(operation, b, result) {
//     lastOperation = operation;
//     lastB = b;
//     lastResult = result;
//   }

//   function add(a, b) {
//     return a + b;
//   }

//   function subtract(a, b) {
//     return a - b;
//   }

//   function divide(a, b) {
//     return a / b;
//   }

//   function multiply(a, b) {
//     return a * b;
//   }

//   return {
//     add(a, b) {
//       const result = add(a, b);
//       cacheLastOperation(add, b, result);
//       return result;
//     },
//     subtract(a, b) {
//       const result = subtract(a, b);
//       cacheLastOperation(subtract, b, result);
//       return result;
//     },
//     divide(a, b) {
//       const result = divide(a, b);
//       cacheLastOperation(divide, b, result);
//       return result;
//     },
//     multiply(a, b) {
//       const result = multiply(a, b);
//       cacheLastOperation(multiply, b, result);
//       return result;
//     },
//     repeat() {
//       return lastOperation(lastResult, lastB);
//     },
//   };
// })();

// console.log(mathModule.add(2, 3));
// console.log(mathModule.repeat());

// ------------------------------------Math module 3------------------------------

// ('use strict');

// const mathModule = (function () {
//   let lastOperation;
//   let lastB;
//   let lastResult;

//   function withCache(operation) {
//     return function (a, b) {
//       const result = operation(a, b);
//       lastOperation = withCache(operation);
//       lastB = b;
//       lastResult = result;
//       return result;
//     };
//   }

//   function add(a, b) {
//     return a + b;
//   }

//   function subtract(a, b) {
//     return a - b;
//   }

//   function divide(a, b) {
//     return a / b;
//   }

//   function multiply(a, b) {
//     return a * b;
//   }

//   function repeat() {
//     return lastOperation(lastResult, lastB);
//   }

//   return {
//     add: withCache(add),
//     subtract: withCache(subtract),
//     divide: withCache(divide),
//     multiply: withCache(multiply),
//     repeat,
//   };
// })();

// console.log(mathModule.add(2, 3));
// console.log(mathModule.repeat());
// console.log(mathModule.repeat());

// ------------------------------------Math module 4------------------------------

// let lastOperation;
// let lastB;
// let lastResult;

// function withCache(operation) {
//   return function (a, b) {
//     const result = operation(a, b);
//     lastOperation = withCache(operation);
//     lastB = b;
//     lastResult = result;
//     return result;
//   };
// }

// const add = withCache((a, b) => a + b);
// const subtract = withCache((a, b) => a - b);
// const multiply = withCache((a, b) => a * b);
// const divide = withCache((a, b) => a / b);

// function repeat() {
//   return lastOperation(lastResult, lastB);
// }

// // export { add, subtract, multiply, divide, repeat };

// console.log(add(2, 2)); // 4
// console.log(repeat()); // 6
// console.log(repeat()); // 8

// ------------------------------------Singleton------------------------------
// import mongoose from 'mongoose';

// let connection;

// async function getdbConnection() {
//   if (!connection) {
//     console.log('Init connection');
//     connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/local');
//   }
//   console.log('Returning connection');
//   return connection;
// }

// getdbConnection().then(() => {
//   getdbConnection();
// });

// export default getdbConnection;

// ------------------------------------Wrapper------------------------------

// function withAsyncDebug(callback) {
//   return async function withAsyncDebugWrapper(...args) {
//     try {
//       await callback(...args);
//     } catch (e) {
//       console.log(`${Date.now()} Error with ${callback.name}, message: ${e.message}`);
//     }
//   };
// }

// const fetchWithDebug = withAsyncDebug(fetch);

// fetchWithDebug('example.nonexist.com');
// // 1712590673198 Error with fetch, message: Failed to parse URL from example.nonexist.com

// ------------------------------------Wrapper2------------------------------

// function withMemo(callback) {
//   const cache = {};

//   return function withMemoWrapper(...args) {
//     const stringArgs = JSON.stringify(args);

//     if (!cache[stringArgs]) {
//       cache[stringArgs] = callback(...args);
//     }

//     return cache[stringArgs];
//   };
// }

// function add2(num) {
//   return num + 2;
// }

// const add2Memo = withMemo(add2);

// console.log(add2Memo(2)); // 4
// console.log(add2Memo(2)); // 4
// console.log(add2Memo(3)); // 5

// ------------------------------------Curry------------------------------

// const METHOD = {
//   log: 'log',
//   warn: 'warn',
//   error: 'error',
// };

// function log(title, method, message) {
//   try {
//     console[method](`${title}: ${message}`);
//   } catch {
//     console.error('Unsupported log method');
//   }
// }

// log('Debug', METHOD.warn, 'This is a warning');

// ------------------------------------Curry2------------------------------

// const METHOD = {
//   log: 'log',
//   warn: 'warn',
//   error: 'error',
// };

// function log(title) {
//   return function logWithTitle(method) {
//     return function logWithTitleAndMethod(message) {
//       try {
//         console[method](`${title}: ${message}`);
//       } catch {
//         console.error('Unsupported log method');
//       }
//     };
//   };
// }

// log('Debug')(METHOD.warn)('This is a warning');

// ------------------------------------Curry3------------------------------

// const METHOD = {
//   log: 'log',
//   warn: 'warn',
//   error: 'error',
// };

// function log(title) {
//   return function logWithTitle(method) {
//     return function logWithTitleAndMethod(message) {
//       try {
//         console[method](`${title}: ${message}`);
//       } catch {
//         console.error('Unsupported log method');
//       }
//     };
//   };
// }

// const logDebug = log('Debug');

// logDebug(METHOD.log)('Sample debug log.'); // Debug: Sample debug log.

// const logProduction = log('Production');
// const logProductionError = logProduction(METHOD.error);

// logProductionError('Sample production error!'); // Production: Sample production error!

// ------------------------------------Composition------------------------------

// function compose(...functions) {
//   return function (input) {
//     return functions.reduceRight(function (acc, fn) {
//       return fn(acc);
//     }, input);
//   };
// }

// const filterEvenNumbers = (numbers) => numbers.filter((num) => num % 2 !== 0);

// const mapToSquare = (numbers) => numbers.map((num) => num * num);

// const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// const processNumbers = compose(sumNumbers, mapToSquare, filterEvenNumbers);

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(processNumbers(numberArray)); // Output: 165

// ------------------------------------Decorator------------------------------

// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
// }

// function withSample(InputClass) {
//   Object.defineProperty(InputClass, 'create', {
//     value: () => new InputClass('Bob', 2),
//   });
// }

// withSample(User);

// const sampleUser = User.create();

// console.log(sampleUser); // User { name: 'Bob', id: 2 }

// ------------------------------------Mixin------------------------------

// const userObject = {
//   name: 'Bob',
//   id: 123,
// };

// const loadDataMixin = {
//   loadData: async function fetchAndSetData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     this.data = data;
//   },
// };

// Object.assign(userObject, loadDataMixin);

// userObject.loadData('https://api.github.com/users/dyrpit').then(() => console.log(userObject));
