const characters = require("./characters.json");
const episodes = require("./episodes.json");

function getCharactersFromEpisodesBefore(date) {
  const dateUnix = date.getTime();
  const result = episodes
    .filter((episode) => {
      const episodeCreationUnix = new Date(episode.created).getTime();
      return episodeCreationUnix < dateUnix;
    })
    .map((episode) => episode.characters)
    .flat()
    .map((characterUrl) =>
      characterUrl.replace("https://rickandmortyapi.com/api/character/", "")
    )
    .map((id) => characters[id - 1]);

  return Array.from(new Set(result));
}

const targetDate = new Date(2020, 4, 30);
console.log(getCharactersFromEpisodesBefore(targetDate).slice(0, 10));
