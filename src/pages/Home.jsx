import React from 'react'
import GenreList from '../components/GenreList'
import Games from '../components/Games'

function Home() {
    return (
        <div className='grid grid-cols-6 px-8 '>
            <div className=' h-full hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-6 md:col-span-5'>
                <Games />
            </div>

        </div>
    )
}

export default Home