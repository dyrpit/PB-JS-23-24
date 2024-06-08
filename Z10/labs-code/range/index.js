const rangeObj = {
  from: 2,
  to: 7,

  [Symbol.iterator]() {
    this.current = this.from;

    const next = () => {
      if (this.current <= this.to) {
        return { value: this.current++, done: false };
      } else {
        return { done: true };
      }
    };

    return { next };
  },
};

for (let i of rangeObj) {
  console.log(i);
}
