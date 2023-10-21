let array = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

// Calculate average
// 1. Calculate sum of all elements
// 2. Divide by array length
// 3. Return it

function calculateAverage(array) {
  let sum = 0;

  for (let currentNumber of array) {
    sum = sum + currentNumber;
  }

  let result = sum / array.length;

  return +result.toFixed(2);
}

console.log(calculateAverage(array));
