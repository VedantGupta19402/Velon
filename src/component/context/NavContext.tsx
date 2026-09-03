'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const NavBarContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);
const NavBarColorContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['white', () => {}]);
const ColorCombination = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['black', () => {}]);

interface NavContextProps {
  children: ReactNode;
}

const NavContext: React.FC<NavContextProps> = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>('black');
  const pathname = usePathname();

  const navColor =
    pathname === '/Project' ||
    pathname === '/project' ||
    pathname === '/About' ||
    pathname === '/about' ||
    pathname === '/Contact' ||
    pathname === '/contact' ||
    pathname === '/Blog' ||
    pathname === '/blog'
      ? 'black'
      : 'white';

  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setNavOpen]}>
        <NavBarColorContext.Provider value={[navColor, () => {}]}>
          <ColorCombination.Provider value={[color, setColor]}>
            {children}
          </ColorCombination.Provider>
        </NavBarColorContext.Provider>
      </NavBarContext.Provider>
    </div>
  );
};

export { NavBarContext, NavBarColorContext, ColorCombination, NavContext };
export default NavContext;
