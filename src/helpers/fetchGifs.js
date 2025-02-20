export const fetchGifs = async (category) => {
  const api_key = "iWBXh4858E4KNh2nzrweADZjCG4ssIg0";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${api_key}`;

  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
