import React, { useEffect } from 'react'
import { fetchFilteredGamesByGenre } from '../services/fetchFilteredGamesByGenre';
import { useQuery } from '@tanstack/react-query';


function FilteredGamesByGenre({ genreId, page }) {
    // const { id } = useContext(genreContext)

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['filteredGames', genreId, page],
        queryFn: () => fetchFilteredGamesByGenre(genreId, page),
        enabled: !!genreId,  // Only run query when genreId is not null

    });

    useEffect(() => {
        console.log("data in FilteredGamesByGenre", data);
        console.log("genreId in FilteredGamesByGenre", genreId);
    }, [data, genreId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message} - Error...</div>;
    }

    return (

        <div>
            <h2 className='font-bold text-[30px] dark:text-white mt-5 '>Popular Games</h2>

            <div className='grid gap-6 rounded-lg grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {data && data.map((item, index) => (
                    <div className='p-3 rounded-lg dark:text-white hover:scale-105 transi ease-in-out duration-300 '>
                        <img src={item.background_image}
                            className='w-full h-[80%] rounded-xl object-cover'
                        />
                        <h2 className=' text-[20px] font-bold'>
                            {item.name}
                            <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700'>{item.metacritic}</span>
                        </h2>
                        <h4 className='text-gray-800 dark:text-gray-400'>⭐{item.rating} 💭{item.reviews_count} 🔥{item.suggestions_count}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilteredGamesByGenre;