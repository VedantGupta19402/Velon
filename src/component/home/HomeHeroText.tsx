'use client';

import React from 'react';
import { Video } from './VideoBaground';

const HomeHeroText: React.FC = () => {
  return (
    <div className='font-[font1] pt-6 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>Built for</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex text-center items-center'>
        <span>every</span>
        <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-2 mx-4 inline-block'>
          <Video />
        </div>
        <span>motion</span>
      </div>
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>velocity</div>
    </div>
  );
};

export { HomeHeroText };
export default HomeHeroText;
