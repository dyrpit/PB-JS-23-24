// Create a stopwatch - function that will return 2 methods - start and stop
// Start stopwatch will count seconds in the console
// Stop will finish running our stopwatch

function getStopwatch() {
  let interval;
  let seconds = 0;

  function start() {
    interval = setInterval(() => {
      seconds++;
      console.log(seconds);
    }, 1000);
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      seconds = 0;
    }
  }

  return {
    start,
    stop,
  };
}
