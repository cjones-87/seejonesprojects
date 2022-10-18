import React from 'react';

import Iframe from 'react-iframe';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

export default function Cube() {
  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingBottom: '2rem',
        width: '100%',
      }}
    >
      <div className="App" style={{ width: '100%' }}>
        <Iframe
          url="https://3d-box-animation.vercel.app/"
          width="100%"
          id="myId"
          scrolling="no"
          frameBorder={0}
        />
      </div>
    </div>
  );
}
