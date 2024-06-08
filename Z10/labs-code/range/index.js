const rangeObj = {
  from: 3,
  to: 7,

  [Symbol.iterator]() {
    this.current = this.from;

    function next() {
      if (this.current <= this.to) {
        return { value: this.current++, done: false };
      } else {
        return { done: true };
      }
    }

    return { next: next.bind(this) };
  },
};

for (let num of rangeObj) {
  console.log(num); // 3, 4, 5, 6, 7
}

// ASYNC ITERATOR

// const rangeObj = {
//   from: 2,
//   to: 7,

//   [Symbol.asyncIterator]() {
//     this.current = this.from;

//     const next = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       if (this.current <= this.to) {
//         return { value: this.current++, done: false };
//       } else {
//         return { done: true };
//       }
//     };

//     return { next };
//   },
// };

// (async () => {
//   for await (let i of rangeObj) {
//     console.log(i);
//   }
// })();
