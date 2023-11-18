const episodes = require("./episodes.json");

function organizeEpisodesBySeason() {
  const result = episodes.reduce((acc, episodeData) => {
    const { name, episode } = episodeData;
    const [season, episodeNumber] = episode.split("E");

    if (!acc[season]) {
      acc[season] = [];
    }

    acc[season].push({ name, episodeNumber });

    return acc;
  }, {});

  return result;
}

console.log(organizeEpisodesBySeason());

// alternative
// function organizeEpisodesBySeason() {
//   const result = episodes.reduce((acc, episodeData) => {
//     const { name, episode } = episodeData;
//     const [season, episodeNumber] = episode.split("E");

//     const dataToAdd = { name, episodeNumber };

//     return {
//       ...acc,
//       [season]: acc[season] ? [...acc[season], dataToAdd] : [dataToAdd],
//     };
//   }, {});

//   return result;
// }

// console.log(organizeEpisodesBySeason());
