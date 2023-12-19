import { useState } from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MobileBurger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function resetToggle() {
    setIsOpen((isOpen) => false);
  }

  return (
    <div className="App">
      <div className="mobile-nav">
        <GiHamburgerMenu onClick={toggle} />

        {isOpen && (
          <NavMenu className="mobile-nav-wrapper" onClick={resetToggle}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/examples">Examples</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/playlist">Playlist</NavLink>
          </NavMenu>
        )}
      </div>
    </div>
  );
}
