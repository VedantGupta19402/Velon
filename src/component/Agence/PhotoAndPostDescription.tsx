'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const PhotoAndPostDescription: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainPageRef = useRef<HTMLDivElement | null>(null);
  const firstPageRef = useRef<HTMLImageElement | null>(null);
  const secondPageRef = useRef<HTMLImageElement | null>(null);
  const thirdPageRef = useRef<HTMLElement | null>(null);
  const forthPageRef = useRef<HTMLElement | null>(null);
  const fifthPageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const anim = gsap.context(() => {
      if (!mainPageRef.current) return;
      gsap.to(secondPageRef.current, {
        scrollTrigger: {
          trigger: mainPageRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: firstPageRef.current,
        },
      });
      gsap.to(thirdPageRef.current, {
        scrollTrigger: {
          trigger: mainPageRef.current,
          start: 'top -100%',
          end: 'bottom bottom',
          pin: secondPageRef.current,
        },
      });
      gsap.to(forthPageRef.current, {
        scrollTrigger: {
          trigger: mainPageRef.current,
          start: 'top -200%',
          end: 'bottom bottom',
          pin: thirdPageRef.current,
        },
      });
      gsap.to(fifthPageRef.current, {
        scrollTrigger: {
          trigger: mainPageRef.current,
          start: 'top -300%',
          end: 'bottom bottom',
          pin: forthPageRef.current,
        },
      });
    });
    return () => anim.revert();
  }, []);

  return (
    <div
      ref={mainPageRef}
      className='imageAnimation h-[500vh] flex justify-center flex-col w-full items-center relative'
    >
      {/* 01 First animation section */}
      <section className='absolute top-0 -left-[16vw]'>
        <div className='h-screen w-[37vw] bg-black rounded-4xl overflow-hidden'>
          <img
            ref={firstPageRef}
            className='object-cover w-full h-full'
            src='https://picsum.photos/seed/team1/480/640'
            alt='team member'
          />
          <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-30 right-0 z-0'>
            <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>MAYA</h1>
            <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>MAYA</h1>
          </div>
          <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-130 right-0'>
            <div className='flex justify-center items-center z-3'>
              <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>CHEN</h1>
              <h4 className='text-white text-4xl bottom-0 font-[font2] uppercase whitespace-nowrap'>
                Creative Director
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Second animation section */}
      <section className='absolute -left-[16vw] top-[100vh]'>
        <div className='h-screen w-[37vw] bg-black rounded-4xl overflow-hidden z-1'>
          <img
            ref={secondPageRef}
            className='object-cover w-full h-full'
            src='https://picsum.photos/seed/team6/480/640'
            alt='team member'
          />
          <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-30 right-0 z-0'>
            <h1 className='text-[10vw] font-[font2] uppercase text-[#D3FD50]'>DARIUS</h1>
            <h1 className='text-[10vw] font-[font2] uppercase text-[#D3FD50]'>DARIUS</h1>
          </div>
          <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-130 right-0'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>OKONJO</h1>
              <h4 className='text-white text-4xl bottom-0 font-[font2] uppercase whitespace-nowrap'>
                Lead Developer
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Third animation section */}
      <section ref={thirdPageRef} className='h-screen w-screen absolute top-[200vh]'>
        <div className='bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
          <img
            className='imageBottomOfAgence object-bottom h-full w-full'
            src='https://picsum.photos/seed/showcase1/1280/960'
            alt='Showcase 1'
          />
          <div className='absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
            <h1 className='text-white font-[font2] text-4xl'>Pulse</h1>
            <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>
              Motion in every frame
            </h1>
          </div>
        </div>
      </section>

      {/* 04 Fourth animation section */}
      <section ref={forthPageRef} className='h-screen w-screen absolute top-[300vh]'>
        <div className='bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
          <img
            className='imageBottomOfAgence object-bottom h-full w-full'
            src='https://picsum.photos/seed/showcase2/1280/960'
            alt='Showcase 2'
          />
          <div className='absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
            <h1 className='text-white font-[font2] text-4xl'>Aether</h1>
            <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>
              Born from light
            </h1>
          </div>
        </div>
      </section>

      {/* 05 Fifth animation section */}
      <section ref={fifthPageRef} className='h-screen w-screen absolute top-[400vh]'>
        <div className='bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
          <img
            className='imageBottomOfAgence object-bottom h-full w-full'
            src='https://picsum.photos/seed/showcase3/1280/960'
            alt='Showcase 3'
          />
          <div className='absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
            <h1 className='text-white font-[font2] text-4xl'>Drift</h1>
            <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>
              Where speed meets stillness
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export { PhotoAndPostDescription };
export default PhotoAndPostDescription;
