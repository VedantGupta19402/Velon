'use client';

import React, { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';

interface StairsProps {
  children?: ReactNode;
}

const Stairs: React.FC<StairsProps> = ({ children }) => {
  const appRef = useRef<HTMLDivElement | null>(null);
  const currentPath = usePathname();
  const stairParentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: 'block',
      delay: -0.3,
    });
    tl.from('.stairs', {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to('.stairs', {
      y: '100%',
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairParentRef.current, {
      display: 'none',
    });
    tl.to('.stairs', {
      y: 0,
    });

    gsap.from(appRef.current, {
      opacity: 0,
      delay: 1.2,
    });
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className='h-screen w-full fixed z-40 pointer-events-none hidden'>
        <div className='h-full w-full flex fixed inset-0'>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={appRef}>{children}</div>
    </div>
  );
};

export type { StairsProps };
export { Stairs };
export default Stairs;
