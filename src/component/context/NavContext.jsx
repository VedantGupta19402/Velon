import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavBarContext = createContext();
export const NavBarColorContext = createContext();
export const ColorCombination = createContext();
const NavContext = ({children}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState('white');
  const [color, setColor] = useState('black');
  const locationOfPage = useLocation().pathname;
  useEffect(() => {
    if (locationOfPage == '/Project' || locationOfPage == '/Agence' || locationOfPage == '/Contact' || locationOfPage == '/Blog') {
      setNavColor('black')
    } else {
      setNavColor('white')
    }
  })
  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setNavOpen]}>
        <NavBarColorContext.Provider value={[navColor, setNavColor]}>
          <ColorCombination.Provider value={[color,setColor]}>
          {children}
          </ColorCombination.Provider>
        </NavBarColorContext.Provider>
      </NavBarContext.Provider>
    </div>
  )
}

export default NavContext
