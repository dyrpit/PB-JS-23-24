let arr = [1, 6, 87, 534, 23, 5];

function linearSearch(arr, target) {
  for (let currentElement of arr) {
    if (currentElement === target) {
      return currentElement;
    }
  }
  return "Not found";
}
console.log(linearSearch(arr, 87));
