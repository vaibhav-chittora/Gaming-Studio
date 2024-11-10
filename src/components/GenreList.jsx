import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenreList } from "../services/fetchGenreList.js";

function GenreList() {
  const [genreActiveIndex, setGenreActiveIndex] = useState(0);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["genreList"],
    queryFn: () => fetchGenreList(),
  });
  useEffect(() => {
    console.log(data);
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message} - Error...</div>;
  }

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white py-5 px-3">Genre</h2>

      {data.map((item, index) => (

        <div
          onClick={() => setGenreActiveIndex(index)}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg group hover:dark:bg-gray-600 
            ${genreActiveIndex === index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >

          <img
            src={item.image_background}
            className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-300 
              ${genreActiveIndex === index ? "scale-105" : null}`}
          />


          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-in-out duration-300 ${genreActiveIndex === index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
