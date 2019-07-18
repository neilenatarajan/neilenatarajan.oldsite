import React from 'react';
import ReactDOM from 'react-dom';
import Nametag from './Nametag';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Nametag /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});