import React from 'react';
import { Link } from 'react-router-dom';

function NavItem(props) {
  return (
    <div className="navitem">
      <Link to={props.to}>{props.pageName}</Link>
    </div>
  );
}

export default NavItem;
