function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;

    // let tmp = current;
    // current = next;
    // next = tmp + next;

    [current, next] = [next, current + next];
  }
}

const fibonacci = fibonacciGenerator();

for (let i = 0; i < 20; i++) {
  console.log(fibonacci.next().value);
}
