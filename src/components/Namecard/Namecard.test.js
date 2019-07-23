import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as TestRouter, } from 'react-router-dom';
import Namecard from './Namecard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Namecard /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
