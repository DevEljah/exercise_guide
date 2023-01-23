export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_GYM_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
/* fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

////////////////////////////////
////////YouTube Vids Fetch//////
////////////////////////////////

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_GYM_YT_RAPID_API_KEY,
  },
};
