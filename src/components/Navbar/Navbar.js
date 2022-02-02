import React, { useState } from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks } from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
      <>
        <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                    <NavIcon />
                    ULTRA
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                      <NavLinks to='/'>
                        Home
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='/services'>
                        Services
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='/products'>
                        Products
                      </NavLinks>
                    </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
  )
};

export default Navbar;