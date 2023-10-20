let sentence =
  "Hello, this is my long sentence, please break it up on the display.";
let DISPLAY_SIZE = 12;

while (sentence.length > DISPLAY_SIZE) {
  let indexOfLastSpace = sentence.lastIndexOf(" ", DISPLAY_SIZE);
  let partOfSentence = sentence.slice(0, indexOfLastSpace);

  console.log(partOfSentence);

  sentence = sentence.slice(indexOfLastSpace + 1);
}

console.log(sentence);
