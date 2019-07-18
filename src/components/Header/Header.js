import React from 'react';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header className="header">
      <a className="sociallink">facebook</a>
      <a className="sociallink">instagram</a>
      <a className="sociallink">twitter</a>
      <a className="sociallink">linkedin</a>
      <NavBar />
    </header>
  );
}

export default Header;
