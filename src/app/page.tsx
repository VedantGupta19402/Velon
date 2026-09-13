'use client';

import React from 'react';
import { Video } from '@/component/home/VideoBaground';
import { HomeHeroText } from '@/component/home/HomeHeroText';
import { HomeBottomText } from '@/component/home/HomeBottomText';

export default function HomePage() {
  return (
    <div>
      <div className='h-screen w-screen fixed inset-0'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between pt-20 sm:pt-0'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
}
