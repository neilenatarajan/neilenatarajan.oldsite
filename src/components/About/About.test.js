import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><About /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
