// Create a function that will return us an object with 2 methods
// The first method will allow us to log a message in the console after a certain number of milliseconds
// The second one will allow us to cancel the message log before its timeout

function getTimedLogger() {
  let timeout;

  function setTimedLog(message, time) {
    timeout = setTimeout(() => console.log(message), time);
  }

  function cancelTimedLog() {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  return {
    setTimedLog,
    cancelTimedLog,
  };
}
