// -----------------------------1--------------------------------
// Create loop to reverse string

let text = "This is text";
let result = "";

for (let i = text.length - 1; i >= 0; i--) {
  result = result + text[i];
}

console.log(result);

// -----------------------------2--------------------------------
// Create loop to check if string is palindrom

const palindrom = "race car"; // true
// const palindrom = "A man, a plan, a canal. Panama"; // true
// const palindrom = "never odd or even"; // true
// const palindrom = "nope"; // false

let preparedString = palindrom
  .replaceAll(" ", "")
  .replaceAll(",", "")
  .replaceAll(".", "")
  .toLowerCase();

let reversedString = "";

for (let i = preparedString.length - 1; i >= 0; i--) {
  reversedString = reversedString + preparedString[i];
}

console.log(reversedString === preparedString);
