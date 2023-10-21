// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let matrix = [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];

// let matrix = [[5]];

function diagonalSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1 - i) {
      sum = sum + matrix[i][i];
    } else {
      sum = sum + matrix[i][i];
      sum = sum + matrix[i][matrix.length - 1 - i];
    }
  }

  return sum;
}

console.log(diagonalSum(matrix));
