import React from 'react'
import GenreList from '../components/GenreList'
import Games from '../components/Games'

function Home() {
    return (
        <div className='grid grid-cols-4 px-8 '>
            <div className=' h-full hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                <Games />
            </div>

        </div>
    )
}

export default Home