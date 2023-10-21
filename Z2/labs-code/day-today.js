// function currentDayNameInPoland() {
//   let daysNamesInPolish = ["niedziela", "pon", "wt", "sr", "cz", "pt", "sob"];
//   let today = new Date();

//   let currentDayIndex = today.getDay();

//   return daysNamesInPolish[currentDayIndex];
// }

// console.log(currentDayNameInPoland());

function getDayName(locale) {
  let today = new Date();
  return today.toLocaleDateString(locale, {
    weekday: "long",
  });
}

let dayName = getDayName("en-EN");

console.log(dayName);
