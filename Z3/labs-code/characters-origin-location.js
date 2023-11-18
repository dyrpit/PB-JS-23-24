const characters = require("./characters.json");
const episodes = require("./episodes.json");
const locations = require("./locations.json");

function getCharactersLocationFromEpisodes(episodeFrom, episodeTo) {
  const result = episodes
    .filter((episode) => episode.id >= episodeFrom && episode.id <= episodeTo)
    .map((episode) => episode.characters)
    .flat()
    .map((characterUrl) => {
      const characterId = +characterUrl.replace(
        "https://rickandmortyapi.com/api/character/",
        ""
      );
      const characterOrigin = characters[characterId - 1].origin;
      const locationId = characterOrigin.url.replace(
        "https://rickandmortyapi.com/api/location/",
        ""
      );
      if (!locationId) {
        return null;
      }
      return locations[+locationId - 1];
    })
    .filter((location) => location != null);

  return Array.from(new Set(result));
}

console.log(getCharactersLocationFromEpisodes(5, 25).slice(0, 10));
