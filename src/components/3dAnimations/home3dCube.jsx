import React from 'react';

import Iframe from 'react-iframe';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

export default function Cube() {
  return (
    <div
      className="bg-black-alpha-90"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '100%',
      }}
    >
      <a href="https://3d-box-animation.vercel.app/">
        <h1
          style={{
            color: 'rebeccapurple',
            paddingBottom: '1rem',
          }}
        >
          3d Animation
        </h1>
      </a>
      <div className="App bg-black-alpha-90" style={{ width: '100%' }}>
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
