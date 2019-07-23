import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Home /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
