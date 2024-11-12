import React, { useEffect } from "react";
function Banner({ gameBanner }) {
    useEffect(() => {
        // console.log("Game Banner", gameBanner);
    });

    return (
        <div className="relative border-none">
            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-xl ">

                <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
                <button className="bg-blue-600 text-white px-2 p-1 rounded-lg">Get Now</button>
            </div>
            <img src={gameBanner.background_image} className="md:h-[350px] aspect-auto w-full object-cover rounded-xl" alt="Banner Image" />
        </div>
    );
}

export default Banner;
