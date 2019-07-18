import React from 'react';
import ReactDOM from 'react-dom';
import Writing from './Writing';
import { StaticRouter as TestRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRouter><Writing /></TestRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
