import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import Photocard from './Photocard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Photocard /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
