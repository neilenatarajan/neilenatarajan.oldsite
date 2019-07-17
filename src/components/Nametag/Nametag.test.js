import React from 'react';
import ReactDOM from 'react-dom';
import Nametag from './Nametag';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nametag />, div);
  ReactDOM.unmountComponentAtNode(div);
});
