// Binary Search (This algorithm assumes that the array is sorted)
function searchElementBinary(inputArray, targetElement) {
  let middleIndex = Math.floor(inputArray.length / 2);
  let currentElement = inputArray[middleIndex];

  if (currentElement === targetElement) {
    return "Found " + currentElement;
  }

  if (inputArray.length <= 1) {
    // We already checked all possibilities
    return "Not found";
  }

  if (currentElement > targetElement) {
    return searchElementBinary(inputArray.slice(0, middleIndex), targetElement);
  }

  if (currentElement < targetElement) {
    return searchElementBinary(
      inputArray.slice(middleIndex + 1),
      targetElement
    );
  }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(searchElementBinary(arr, 4));
