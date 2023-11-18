// Create a function that returns number of days till Friday

const FRIDAY_INDEX = 5; // You can often see 'constants' or config values written in this way

function getDaysTillFriday() {
  let today = new Date();
  let dayIndex = today.getDay();
  let diff = FRIDAY_INDEX - dayIndex;

  if (diff === -1) {
    return 6;
  }

  return diff;
}

console.log("Days till friday: " + getDaysTillFriday());
