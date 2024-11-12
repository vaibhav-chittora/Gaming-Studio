import axiosInstance from "./axiosInstance.js";

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchFilteredGamesByGenre(id = 4, page = 1) {
  try {
    const response = await axiosInstance.get(
      `/games?key=${apiKey}&genre=${id}&page=${page}`
    );
    // console.log("Filtered Genre Games- ", response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
