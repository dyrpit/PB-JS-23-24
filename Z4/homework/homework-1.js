// Create a function that returns a Promise that has
// a 50% chance of resolving, and 50% chance of rejecting,
// on resolve it should return “Now I work”
// and on reject “Now I don’t’.

function getRandomPromise() {
  const isSuccess = Math.random() > 0.5;
  const randomPromise = new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve("Now I work");
    } else {
      reject("Now I don't");
    }
  });
  return randomPromise; // Your solution here
}

getRandomPromise()
  .then((result) => console.log('I expect this to be "Now I work": ', result))
  .catch((error) => console.log('I expect this to be "Now I don\'t": ', error));
