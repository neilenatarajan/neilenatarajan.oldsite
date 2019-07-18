import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><App /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
