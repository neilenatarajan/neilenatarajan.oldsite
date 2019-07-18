import React from 'react';
import ReactDOM from 'react-dom';
import CompSci from './CompSci';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompSci />, div);
  ReactDOM.unmountComponentAtNode(div);
});
