// Create a function that will display a message in the console
// at specified intervals for a given duration

function alertForTimePeriod(alertFunc, alertFrequency, alertPeriod) {
  let currentDuration = 0;

  let intervalId = setInterval(() => {
    alertFunc();
    currentDuration += alertFrequency;

    if (currentDuration >= alertPeriod) {
      clearInterval(intervalId);
      console.log("Alerting switched off");
    }
  }, alertFrequency);
}

function logAlertMessage() {
  console.log("Alerting!");
}

alertForTimePeriod(logAlertMessage, 3000, 21000);
