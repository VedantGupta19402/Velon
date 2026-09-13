'use client';

import React from 'react';
import Link from 'next/link';

const HomeBottomText: React.FC = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 pb-8'>
      <Link
        href='/Project'
        className='text-[6.5vw] hover:text-[#D3FD50] uppercase border-3 hover:border-[#D3FD50] px-10 border-white rounded-full leading-[5.5vw] pt-4 transition-colors'
      >
        Portfolio
      </Link>
      <Link
        href='/About'
        className='text-[6.5vw] uppercase border-3 hover:text-[#D3FD50] px-10 border-white hover:border-[#D3FD50] rounded-full leading-[5.5vw] pt-4 transition-colors'
      >
        About
      </Link>
    </div>
  );
};

export { HomeBottomText };
export default HomeBottomText;
