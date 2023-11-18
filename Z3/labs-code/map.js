const myArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

const result = myArray.map((currentElement, index) => {
  if (index % 2 === 1) {
    return currentElement * 2;
  }

  return currentElement;
});

console.log(result); // [1, 12, 23, 16, 4, 196, 3, 14, 3, 196, 4, 196]
