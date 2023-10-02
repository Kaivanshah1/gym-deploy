export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "437ae21e98mshbbf97de3894804ap1c8818jsne569c47ff131",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "437ae21e98mshbbf97de3894804ap1c8818jsne569c47ff131",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
