const apiKey = "COexOQTgTLc2EGBr7z29hX7Ia0dWVwx8";
const limit = 5;
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = await data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
export default getGifs;