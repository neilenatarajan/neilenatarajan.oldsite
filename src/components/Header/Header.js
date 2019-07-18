import React from 'react';
import NavItem from '../NavItem/NavItem';

function Header() {
  return (
    <header className="header">
      <NavItem pageName="About Me" to="about" />
    </header>
  );
}

export default Header;
