// NEW keyword with ordinary function

// function testFunc() {
//   return 'This is test';
// }

// const testObj1 = new testFunc();
// console.log(testObj1);

// -----------------------------------------------------------------

// NEW keyword with arrow function

// const testArrow = () => {
//   console.log(this);
// };

// testArrow();

// const testObj2 = new testArrow();
// console.log(testObj2);

// -----------------------------------------------------------------

// THIS - depends on how the function was called

// const test = {
//   name: 'test obj',
//   getThisLogger() {
//     console.log(this);
//   },
// };

// // invoking on object - implicit binding
// test.getThisLogger(); // <--- this points to test object

// const t = test.getThisLogger;

// // ordinar function call - default binding
// t(); // <--- this points global object (window)

// // invoking using call/apply - explicit binding
// t.call(test); // <--- this points to test object
// t.apply(test); // <--- this points to test object

// -----------------------------------------------------------------

// THIS - depends on how the function was called

// const userObj = {
//   name: 'John',
//   score: 0,
//   increment() {
//     function add() {
//       console.log(this);
//       this.score++;
//     }
//     add();
//   },
// };

// userObj.increment();
