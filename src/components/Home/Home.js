import React from 'react';
import Namecard from '../Namecard/Namecard';
import WIP from '../WIP/WIP';
import Header from '../Header/Header';
import Photocard from '../Photocard/Photocard';

function Home() {
  return (
    <div>
      <Header />
      <div className="homepage">
        <Namecard />
        <WIP />
        <Photocard />
      </div>
    </div>
  );
}

export default Home;
