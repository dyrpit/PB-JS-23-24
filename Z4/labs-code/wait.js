// Create a function that will allow us to wait for a certain amount of milliseconds before running the next taks

async function example() {
  console.log("Wait...");
  await wait(1000);
  console.log("...a sec!");
}

function wait(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });
}

example();
