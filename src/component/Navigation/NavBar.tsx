'use client';

import React, { useContext, useRef } from 'react';
import { NavBarColorContext, NavBarContext } from '../context/NavContext';
import { useRouter } from 'next/navigation';

const NavBar: React.FC = () => {
  const navGreenBar = useRef<HTMLDivElement | null>(null);
  const [, setNavOpen] = useContext(NavBarContext);
  const [navColor] = useContext(NavBarColorContext);
  const router = useRouter();

  return (
    <div className='z-40 flex fixed top-0 w-screen items-start justify-between'>
      <div
        className='p-5 cursor-pointer select-none'
        onClick={() => {
          router.push('/');
        }}
      >
        <div
          className='font-[font2] text-4xl font-extrabold tracking-widest uppercase'
          style={{ color: navColor }}
        >
          velon
        </div>
      </div>
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          if (navGreenBar.current) navGreenBar.current.style.height = '100%';
        }}
        onMouseLeave={() => {
          if (navGreenBar.current) navGreenBar.current.style.height = '0%';
        }}
        className='h-15 w-[15vw] min-w-[120px] bg-black relative cursor-pointer'
      >
        <div
          ref={navGreenBar}
          className='bg-[#D3FD50] absolute w-full transition-all duration-300 h-0 top-0'
        ></div>
        <div className='mainNavMenuBtn relative flex flex-col gap-1.5 justify-center h-full px-6 sm:px-12 items-end'>
          <div className='navMenuBtn w-12 sm:w-18 h-0.5 bg-white'></div>
          <div className='navMenuBtn w-8 sm:w-10 h-0.5 bg-white'></div>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
export default NavBar;
