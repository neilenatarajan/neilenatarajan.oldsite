import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import CompSci from './CompSci';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><CompSci /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
