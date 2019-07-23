import React from 'react';
import ReactDOM from 'react-dom';
import Photocard from './Photocard';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Photocard /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});