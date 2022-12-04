import axios from "axios";

export const getCollection = async (page) => {
  const response = await axios.get(
    `https://www.rijksmuseum.nl/api/nl/collection?key=ZSi2lYRS&p=${page}&ps=10`
  );
  let collection = response.data.artObjects;
  return collection;
};

export const getArtObject = async (url) => {
  const response = await axios.get(url);
  let artObject = response.data.artObject;
  return artObject;
};
