import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Header /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});