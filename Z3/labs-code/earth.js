const characters = require("./characters.json");

function getCharactersFromLocation(location) {
  const result = characters
    .filter((character) => {
      return character.location.name.includes(location);
    })
    .sort((charA, charB) => {
      if (charA.name > charB.name) {
        return 1;
      }
      if (charA.name < charB.name) {
        return -1;
      }
      return 0;
    });

  return result;
}

console.log(getCharactersFromLocation("Earth").slice(0, 10));
