import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import MobileBurger from './MobileBurger';

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
          <a href="/portfolio">TH</a>
        </div>
        <MobileBurger />
        <NavMenu className="nav-wrapper">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/examples">Examples</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/playlist">Playlist</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
