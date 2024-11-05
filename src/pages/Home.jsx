import React, { useEffect } from 'react'
import GenreList from '../components/GenreList'
import { getGenreList } from '../services/fetchGenreList'

function Home() {
    const data = getGenreList()
    useEffect(() => {
        console.log(data);
    })

    return (
        <div className='grid grid-cols-4'>
            <div className=' bg-red-500 h-full hidden md:block'>
                <GenreList />
            </div>
            <div className='bg-blue-500 col-span-4 md:col-span-3'>GameList</div>

        </div>
    )
}

export default Home