export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed4e0cf282msh7aa4eba47361c3dp1b5d5ajsn9aee14a9b04f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
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
