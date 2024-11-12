import axiosInstance from "./axiosInstance.js";

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchGames() {
  try {
    const response = await axiosInstance.get(`/games?key=${apiKey}`);
    // console.log("Games data - ", response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
