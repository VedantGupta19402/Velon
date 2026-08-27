'use client';

import React from 'react';
import Link from 'next/link';

const HomeBottomText: React.FC = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 pb-6'>
      <Link
        href='/Project'
        className='text-[6.5vw] hover:text-[#D3FD50] uppercase border-3 hover:border-[#D3FD50] px-10 border-white rounded-full leading-[5.5vw] pt-3 transition-colors'
      >
        Portfolio
      </Link>
      <Link
        href='/Agence'
        className='text-[6.5vw] uppercase border-3 hover:text-[#D3FD50] px-10 border-white hover:border-[#D3FD50] rounded-full leading-[5.5vw] pt-3 transition-colors'
      >
        About
      </Link>
    </div>
  );
};

export { HomeBottomText };
export default HomeBottomText;
