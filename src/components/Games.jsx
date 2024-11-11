import React, { useEffect } from 'react';
import { fetchGames } from '../services/fetchGames';
import { useQuery } from '@tanstack/react-query';
import Banner from './Banner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './GamesCarouselStyling';

function Games() {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['games'],
        queryFn: () => fetchGames(),
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message} - Error...</div>;
    }

    return (
        <div className='px-4 py-8 '>
            <Banner gameBanner={data[0]} />
            <div className='mt-5 hidden md:block'>
                <h1 className='text-[30px] font-bold dark:text-white'>Trending Games</h1>
            </div>
            <Carousel className='mt-8 gap-4'
                responsive={responsive}
                swipeable={true}
                draggable={true}
                // ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                partialVisible={true}
                renderDotsOutside={true}
                minimumTouchDrag={50}
                slidesToSlide={1}
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='p-4 mx-2 bg-white dark:bg-[#121212] text-gray-900 dark:text-white rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-xl transition-transform duration-300 ease-out hover:scale-100'
                    >

                        <img
                            src={item.background_image}
                            alt={item.name || `Game ${index + 1}`}
                            className='w-full h-96 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105'
                        />
                        <h3 className='text-lg font-semibold '>{item.name}</h3>
                    </div>
                ))}
            </Carousel>

        </div>
    );
}

export default Games;
