import React from 'react'
import GenreList from '../components/GenreList'

function Home() {
    return (
        <div className='grid grid-cols-4 px-8 '>
            <div className=' h-full hidden md:block'>
                <GenreList />
            </div>
            <div className='bg-blue-500 col-span-4 md:col-span-3'>GameList</div>

        </div>
    )
}

export default Home