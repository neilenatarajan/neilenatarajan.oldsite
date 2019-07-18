import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><NavBar pageNames={["test"]} to={["test"]}/></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});