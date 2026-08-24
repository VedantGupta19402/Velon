import type { Metadata } from 'next';
import React from 'react';
import { NavContext } from '@/component/context/NavContext';
import { NavBar } from '@/component/Navigation/NavBar';
import { FullScreenNav } from '@/component/Navigation/FullScreenNav';
import { Stairs } from '@/component/common/Stairs';
import '@/index.css';

const metadata: Metadata = {
  title: 'VELON — Built for Every Motion',
  description: 'Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-black text-white antialiased overflow-x-hidden'>
        <NavContext>
          <div className='text-white overflow-hidden min-h-screen'>
            <NavBar />
            <FullScreenNav />
            <Stairs>
              {children}
            </Stairs>
          </div>
        </NavContext>
      </body>
    </html>
  );
}

export { metadata };
