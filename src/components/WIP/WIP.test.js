import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import WIP from './WIP';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><WIP /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
