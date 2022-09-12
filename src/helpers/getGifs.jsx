export const getGifs = async ( category, range ) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=${ range }&api_key=9JX2X7bkQt2qsWSHoE7curdcePL3ecPX`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };