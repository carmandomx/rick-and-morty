import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

export const getLocation = (id) =>
  axios.get(`/location/${id}`, {
    baseURL,
  });

export const getResident = (url) => axios.get(url);
