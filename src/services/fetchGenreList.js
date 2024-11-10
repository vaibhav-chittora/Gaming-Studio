import axiosInstance from "./axiosInstance.js";


const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchGenreList() {
  try {
    const response =await axiosInstance.get(`/genres?key=${apiKey}`);
    console.log("Genralist data - ", response.data.results);
    return response.data.results
  } catch (error) {
    console.log(error);
  }
}
