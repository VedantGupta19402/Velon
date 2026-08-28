'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import { PhotoAndPostDescription } from '@/component/Agence/PhotoAndPostDescription';
import { Fotter } from '@/component/Agence/Fotter';

const AgencePage: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionColorChange = useRef<HTMLDivElement | null>(null);

  const imageArr: string[] = [
    'https://picsum.photos/seed/velon1/480/640',
    'https://picsum.photos/seed/velon2/480/640',
    'https://picsum.photos/seed/velon3/480/640',
    'https://picsum.photos/seed/velon4/480/640',
    'https://picsum.photos/seed/velon5/480/640',
    'https://picsum.photos/seed/velon6/480/640',
    'https://picsum.photos/seed/velon7/480/640',
    'https://picsum.photos/seed/velon8/480/640',
    'https://picsum.photos/seed/velon9/480/640',
    'https://picsum.photos/seed/velon10/480/640',
    'https://picsum.photos/seed/velon11/480/640',
  ];

  useEffect(() => {
    if (!sectionColorChange.current) return;
    gsap.to(sectionColorChange.current, {
      backgroundColor: 'black',
      scrollTrigger: {
        trigger: sectionColorChange.current,
        start: 'top top',
        end: 'top -30%',
        scrub: true,
      },
    });
  }, []);

  useGSAP(() => {
    if (!imageDivRef.current) return;
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 29%',
        end: 'top -105%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          let imageIndex: number;
          if (self.progress < 1) {
            imageIndex = Math.round(self.progress * (imageArr.length - 1));
          } else {
            imageIndex = imageArr.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArr[imageIndex];
          }
        },
      },
    });
  });

  return (
    <div className='text-black bg-white'>
      <div id='pageStart' className='section1 relative py-1'>
        <div
          ref={imageDivRef}
          className='overflow-hidden h-[20vw] w-[15vw] absolute top-[14.5vw] left-[30.7vw] rounded-4xl'
        >
          <img
            ref={imageRef}
            className='h-full w-full object-cover'
            src='https://picsum.photos/seed/velon1/480/640'
            alt='agency mood'
          />
        </div>
        <div className='font-[font1] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>
              BUILT <br />
              TO MOVE
            </h1>
            <div className='px-6 sm:pl-[20vw] lg:pl-[30vw] max-w-6xl mt-8'>
              <p className='text-xl sm:text-[3vw] lg:text-[2.2vw] leading-relaxed'>
                We design at the speed of culture. Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose. Great brands don&apos;t stand still. They move, adapt, and evolve. We build brands that are built to move.
              </p>
            </div>
            <div className='m-12 sm:m-24 lg:m-36 flex flex-col sm:flex-row gap-12 sm:gap-[20vw]'>
              <div>
                <h1 className='text-3xl font-bold'>Expertise</h1>
              </div>
              <div>
                <ul className='text-2xl space-y-2'>
                  <li>Strategy</li>
                  <li>Advertising</li>
                  <li>Branding</li>
                  <li>Design</li>
                  <li>Content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section2 min-h-screen mt-20'>
        <div className='min-h-[30vw] w-full flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 pt-10 px-6 sm:px-10'>
          <div className='sm:w-1/3'>
            <h4 className='text-base sm:text-[1.3vw] leading-7 font-[font2] text-start'>
              Our Work_ Built in motion, shaped by purpose, driven by the relentless pursuit of better.
            </h4>
          </div>
          <div className='sm:w-1/3'>
            <h4 className='text-base sm:text-[1.3vw] leading-7 font-[font2] text-start'>
              Our Creative_ Thriving where ideas move fast and talent moves faster. Pushed to become the sharpest versions of ourselves.
            </h4>
          </div>
          <div className='sm:w-1/3'>
            <h4 className='text-base sm:text-[1.3vw] leading-7 font-[font2] text-start'>
              Our Culture_ We move together. No silos, no ego. Just a team building something worth moving for.
            </h4>
          </div>
        </div>
      </div>
      <div
        ref={sectionColorChange}
        className='section2 -mt-40 sm:-mt-140 flex flex-col items-center justify-center'
      >
        <div className='mt-20 sm:mt-50'>
          <PhotoAndPostDescription />
        </div>
        <Fotter />
      </div>
    </div>
  );
};

export { AgencePage };
export default AgencePage;
