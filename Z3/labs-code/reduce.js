const numbers = [12, 23, 54, 123, 22, 90, 53, 80];

const result = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return (accumulator += currentValue);
  } else {
    return (accumulator -= currentValue);
  }
}, 0);

console.log(result); // 59
