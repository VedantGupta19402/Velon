'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const NavBarContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);
const NavBarColorContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['white', () => {}]);
const ColorCombination = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['black', () => {}]);

interface NavContextProps {
  children: ReactNode;
}

const NavContext: React.FC<NavContextProps> = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<string>('white');
  const [color, setColor] = useState<string>('black');
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === '/Project' ||
      pathname === '/project' ||
      pathname === '/Agence' ||
      pathname === '/agence' ||
      pathname === '/Contact' ||
      pathname === '/contact' ||
      pathname === '/Blog' ||
      pathname === '/blog'
    ) {
      setNavColor('black');
    } else {
      setNavColor('white');
    }
  }, [pathname]);

  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setNavOpen]}>
        <NavBarColorContext.Provider value={[navColor, setNavColor]}>
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
