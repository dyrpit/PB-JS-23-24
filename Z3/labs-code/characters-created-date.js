const characters = require("./characters.json");

function getCharactersCreatedBefore(date) {
  const dateUnix = date.getTime();
  const result = characters.filter((character) => {
    const characterCreationUnix = new Date(character.created).getTime();
    return characterCreationUnix < dateUnix;
  });

  return result;
}

const targetDate = new Date(2018, 3, 15);

console.log(getCharactersCreatedBefore(targetDate).slice(0, 10));
