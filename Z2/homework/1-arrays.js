let arr1 = [1, 6, 23, 8, 4, 8, 3, 7];
let arr2 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

// a. Create a function that takes in an array of numbers and returns sum of all elements
function sumArray(numbersArray) {
  let result = 0;
  for (let number of numbersArray) {
    result += number;
  }

  return result;
}
// console.log('The sum of all elements is: ' + sumArray(arr1));

// b. Create a function that takes in an array of numbers and returns sum of first and last element
function sumFirstAndLast(numbersArray) {
  return numbersArray[0] + numbersArray[numbersArray.length - 1];
}
// console.log('The sum of first and last element is: ' + sumFirstAndLast(arr1));

// c. Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
function reverse(inputArray) {
  let reversed = [];
  for (let element of inputArray) {
    reversed.unshift(element);
  }

  return reversed;
}
// console.log('Reversed array is: ' + reverse(arr1));

// d. Create a function that takes two parameters - array of numbers, and number of attempts.
//    Choose random numbers from the array based on the number of attempts and return the lowest among them
function getLowestFromRandom(numbersArray, attempts) {
  let arrayCopy = [...numbersArray]; // create copy to make sure we don't pick same element, and don't edit the original array
  let randomsFromArray = [];

  while (attempts > 0) {
    let randomNumber = Math.floor(Math.random() * arrayCopy.length);
    let [numberToAdd] = arrayCopy.splice(randomNumber, 1); // splice method returns array even if we removed 1 element!

    randomsFromArray.push(numberToAdd);
    attempts--;
  }

  return Math.min(...randomsFromArray);
}
// console.log(Lowest number from random picks is: ' + getLowestFromRandom(arr1, 4));

// e. Create a function that takes in an array and returns it in random order
function shuffle(numbersArray) {
  let arrayCopy = [...numbersArray];
  let shuffled = [];

  while (arrayCopy.length > 0) {
    let randomNumber = Math.floor(Math.random() * arrayCopy.length);
    let [numberToAdd] = arrayCopy.splice(randomNumber, 1);

    shuffled.push(numberToAdd);
  }

  return shuffled;
}
// console.log('Array in random order: ' + shuffle(arr1));

// f. Calculate the sum of the odd items, arr2
function sumOddNumbers(numbersArray) {
  let result = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 1) {
      result += numbersArray[i];
    }
  }

  return result;
}
// console.log('The sum of odd numbers is: ' + sumOddNumbers(arr2));

// This function assumes that we need to sum numbers at odd indexes
function sumNumbersAtOddIndexes(numbersArray) {
  let sum = 0;
  for (let i = 1; i < numbersArray.length; i += 2) {
    sum += numbersArray[i];
  }
  return sum;
}

// console.log(
//   'The sum of numbers at odd indexes is: ' + sumNumbersAtOddIndexes(arr2)
// );

// g. With a given start value of 0, iterate the array and add even items and subtract odd ones, arr2
function addEvenSubstractOdd(numbersArray) {
  let result = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (i % 2 === 0) {
      result += numbersArray[i];
    } else {
      result -= numbersArray[i];
    }
  }

  return result;
}
// console.log('Result of adding all even numbers and substracting odd ones is: ' + addEvenSubstractOdd(arr2));

// This function assumes that we need to sum even numbers and substract odd ones
function sumEvenSubstractOdd(numbersArray) {
  let result = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 1) {
      result -= numbersArray[i];
    } else {
      result += numbersArray[i];
    }
  }
  return result;
}

console.log(
  "Result of adding all even numbers and substracting odd ones is: " +
    sumEvenSubstractOdd(oddEvenExample)
);
