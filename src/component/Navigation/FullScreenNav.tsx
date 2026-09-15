'use client';

import React, { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavBarContext } from '../context/NavContext';
import { useRouter } from 'next/navigation';

const FullScreenNav: React.FC = () => {
  const [navOpen, setNavOpen] = useContext(NavBarContext);
  const fullNavLinkRef = useRef<HTMLDivElement | null>(null);
  const fullScreenRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to('.fullscreennav', {
      display: 'block',
    });
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    });
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to('.navlink', {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.stairing', {
      delay: 0.1,
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.navlink', {
      opacity: 0,
    });
    tl.to('.fullscreennav', {
      display: 'none',
    });
  }

  useGSAP(
    () => {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id='fullscreennav'
      className='fullscreennav hidden z-50 text-white h-screen w-full overflow-hidden fixed inset-0'
    >
      <div className='h-full w-full fixed inset-0 pointer-events-none'>
        <div className='h-full w-full flex'>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className='relative z-10'>
        <div className='navlink w-full flex justify-between p-6 items-start'>
          <div
            onClick={() => {
              router.push('/');
              setNavOpen(false);
            }}
            className='cursor-pointer select-none'
          >
            <div className='font-[font2] text-4xl font-extrabold tracking-widest uppercase'>
              velon
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className='parentOfCrossBtn h-28 w-28 relative cursor-pointer'
          >
            <div className='crossBtn h-36 w-1 -rotate-45 origin-top bg-white absolute'></div>
            <div className='crossBtn h-36 w-1 rotate-45 origin-top right-0 bg-white absolute'></div>
          </div>
        </div>
        <div className='py-28'>
          <div
            className='origin-top link border-y-[0.5px] border-white relative overflow-hidden cursor-pointer'
            onClick={() => {
              router.push('/Project');
              setNavOpen(false);
            }}
          >
            <h1 className='font-[font2] text-[8vw] uppercase text-center leading-[0.8] py-14'>
              Project
            </h1>
            <div className='moveLink flex absolute top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center w-[200vw]'>
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>view all work</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>view all work</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>view all work</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
              </div>
            </div>
          </div>

          <div
            className='origin-top link border-y-[0.5px] border-white relative overflow-hidden cursor-pointer'
            onClick={() => {
              router.push('/About');
              setNavOpen(false);
            }}
          >
            <h1 className='font-[font2] text-[8vw] uppercase text-center leading-[0.8] py-14'>
              About
            </h1>
            <div className='moveLink flex absolute top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center w-[200vw]'>
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>about me</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>about me</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>about me</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
              </div>
            </div>
          </div>

          <div
            className='origin-top link border-y-[0.5px] border-white relative overflow-hidden cursor-pointer'
            onClick={() => {
              router.push('/Contact');
              setNavOpen(false);
            }}
          >
            <h1 className='font-[font2] text-[8vw] uppercase text-center leading-[0.8] py-14'>
              Contact
            </h1>
            <div className='moveLink flex absolute top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center w-[200vw]'>
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>get in touch</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>get in touch</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>get in touch</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
              </div>
            </div>
          </div>

          <div
            className='origin-top link border-y-[0.5px] border-white relative overflow-hidden cursor-pointer'
            onClick={() => {
              router.push('/Blog');
              setNavOpen(false);
            }}
          >
            <h1 className='font-[font2] text-[8vw] uppercase text-center leading-[0.8] py-14'>
              Blogue
            </h1>
            <div className='moveLink flex absolute top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center w-[200vw]'>
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>latest reads</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>latest reads</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
                <h2 className='uppercase whitespace-nowrap font-[font2] text-[8vw]'>latest reads</h2>
                <img className='h-25 rounded-full object-cover shrink-0 w-80 pb-3' src='https://picsum.photos/seed/menu1/640/290' alt='menu' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FullScreenNav };
export default FullScreenNav;
