function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let result = factorial(n - 1);
    return result * n;
  }
}

console.log(factorial(4));
