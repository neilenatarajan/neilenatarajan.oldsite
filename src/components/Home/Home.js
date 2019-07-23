import React from 'react';
import Nametag from '../Nametag/Nametag';
import WIP from '../WIP/WIP';
import Header from '../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="homepage">
        <Nametag />
        <WIP />
        <WIP />
        <WIP />
        <WIP />
        <WIP />
        <WIP />
        <WIP />
        <WIP />
      </div>
    </div>
  );
}

export default Home;
