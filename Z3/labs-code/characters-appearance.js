const characters = require("./characters.json");

function sortCharactersByAppearanceCount() {
  const result = characters
    .map((character) => {
      return {
        name: character.name,
        appearanceCount: character.episode.length,
      };
    })
    .sort((a, b) => b.appearanceCount - a.appearanceCount);

  return result;
}

console.log(sortCharactersByAppearanceCount().slice(0, 10));
