const characters = require("./characters.json");

function getCharactersCountWithStatus(status) {
  const result = characters.reduce((count, character) => {
    if (character.status === status) {
      return count + 1;
    }

    return count;
  }, 0);

  return result;
}

console.log(getCharactersCountWithStatus("Dead"));
