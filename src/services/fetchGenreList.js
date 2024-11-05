import axiosInstance from "./axiosInstance.js";
const apiKey = import.meta.env.VITE_API_KEY;
export async function getGenreList() {
  try {
    const response =await axiosInstance.get(`/genres?key=${apiKey}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
