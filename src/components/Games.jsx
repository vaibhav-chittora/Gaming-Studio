import React, { useEffect } from 'react'
import { fetchGames } from '../services/fetchGames';
import { useQuery } from '@tanstack/react-query';
import Banner from './Banner'

function Games() {

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["games"],
        queryFn: () => fetchGames()
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
        <div className=''>
            <Banner gameBanner={data[0]} />
            Games</div>
    )
}

export default Games