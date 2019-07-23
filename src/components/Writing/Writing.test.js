import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import Writing from './Writing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Writing /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
