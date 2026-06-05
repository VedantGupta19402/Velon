import React, { useContext, useRef } from 'react'
import { NavBarColorContext, NavBarContext } from '../context/NavContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navGreenBar = useRef(null);
    const [navOpen, setNavOpen] = useContext(NavBarContext)
    const[navColor,setNavColor] = useContext(NavBarColorContext)
    const navigate = useNavigate();
    return (
        <div className='z-4 flex fixed top-0 w-screen items-start justify-between'>
            <div className='p-5 cursor-pointer select-none' onClick={()=>{
                navigate("/")
            }}>
                <div className='font-[font2] text-4xl font-extrabold tracking-widest uppercase' style={{ color: navColor }}>
                    velon
                </div>
            </div>
            <div onClick={() => {
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenBar.current.style.height = "100%"
            }}
                onMouseLeave={() => {
                    navGreenBar.current.style.height = "0%"
                }} className=' h-15 w-[15vw] bg-black relative'>
                <div ref={navGreenBar} className='bg-[#D3FD50] absolute w-full transition-all h-0 top-0 '></div>
                <div className='mainNavMenuBtn relative flex flex-col gap-1.5 justify-center h-full px-12 items-end'>
                    <div className='navMenuBtn w-18 h-0.5 bg-white'></div>
                    <div className='navMenuBtn w-10 h-0.5 bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
