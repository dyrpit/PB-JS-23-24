const numbers = [12, 23, 54, 123, 22, 90, 53, 80];

const result = numbers.filter((number) => {
  if (number % 2 === 1) {
    return true;
  }

  return false;
});

console.log(result); // [ 23, 123, 53 ]
