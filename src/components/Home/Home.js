import React from 'react';
import Nametag from '../Nametag/Nametag';
import Header from '../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="homepage">
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
        <Nametag />
      </div>
    </div>
  );
}

export default Home;
