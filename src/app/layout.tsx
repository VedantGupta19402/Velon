import type { Metadata, Viewport } from 'next';
import React from 'react';
import { NavContext } from '@/component/context/NavContext';
import { NavBar } from '@/component/Navigation/NavBar';
import { FullScreenNav } from '@/component/Navigation/FullScreenNav';
import { Stairs } from '@/component/common/Stairs';
import '@/index.css';

const metadata: Metadata = {
  title: {
    default: 'VELON — Built for Every Motion',
    template: '%s — VELON',
  },
  description: 'Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose.',
  keywords: ['velon', 'creative development', 'motion design', 'portfolio', 'webgl'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'VELON — Built for Every Motion',
    description: 'Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose.',
    type: 'website',
    locale: 'en_US',
    siteName: 'VELON',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELON — Built for Every Motion',
    description: 'Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose.',
  },
};

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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

export { metadata, viewport };
