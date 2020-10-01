import React from 'react';

import Map from './components/Map';
import Address from './components/Address';

import IpifyState from './context/ipify/IpifyState';

const App = () => {
  return (
    <IpifyState>
      <div className='wrapper'>
        <Address />
        <Map />
      </div>
    </IpifyState>
  );
};

export default App;
