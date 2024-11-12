import React, { useState } from 'react'
import GenreList from '../components/GenreList'
import Games from '../components/Games'
import FilteredGamesByGenre from '../components/FilteredGamesByGenre'

function Home() {

    const [selectedGenreId, setSelectedGenreId] = useState(4)

    const handleGenreSelect = (id) => {
        console.log("Id in Home", id);
        setSelectedGenreId(id);
    }


    return (
        <div className='grid grid-cols-6 px-8 '>

            <div className=' h-full hidden md:block'>
                {/* Genre List - working as a sidebar */}
                {/* <GenreList onGenreSelect={handleGenreSelect} /> */}
                <GenreList setGenreId={(selectedGenreId) => setSelectedGenreId(selectedGenreId)} />

            </div>


            <div className='col-span-6 md:col-span-5'>
                {/* Games Carousel */}
                <Games onGenreSelect={handleGenreSelect} />

                <FilteredGamesByGenre genreId={selectedGenreId} />
            </div>

        </div>
    )
}

export default Home