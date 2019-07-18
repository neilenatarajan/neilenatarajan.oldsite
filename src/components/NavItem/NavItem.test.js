import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><NavItem pageName="test" to="test"/></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});