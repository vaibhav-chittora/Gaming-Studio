import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/images/logo1.png'
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';

function Header() {
    // const [toggleThemeIcon, setToggleThemeIcon] = useState(false)

    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        console.log("Theme", theme);
    }, [])
    return (


        <div className='flex items-center px-3'>
            <img src={logo} width={80} height={80} alt="logo" />
            <div className='flex bg-slate-200 p-2 mx-5 w-full items-center rounded-full'>
                <HiMagnifyingGlass />
                <input
                    type="text"
                    className='bg-transparent outline-none  px-2'
                />
            </div>
            <div>
                {theme === 'light' ?
                    <HiMoon
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => setTheme('dark')}
                    />
                    :
                    <HiSun
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => setTheme('light')}
                    />

                }
            </div>
        </div>
    )
}

export default Header