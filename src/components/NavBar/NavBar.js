import React from 'react';
import { Link, } from 'react-router-dom';

function NavBar() {
  const pages = [
    { name: 'Home', ref: '', },
    { name: 'About Me', ref: '/about', },
    { name: 'My Writing', ref: '/writing', },
    { name: 'My Coding', ref: '/compsci', },
  ];
  return (
    <ul className="navbar">
      {
        pages.map((page, idx) => (
          <li key={idx}>
            <Link to={page.ref}>
              {page.name}
            </Link>
          </li>
        ))
          .reverse()
      }
    </ul>
  );
}

export default NavBar;
