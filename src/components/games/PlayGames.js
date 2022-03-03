import React from 'react';

import Iframe from 'react-iframe';

export default function PlayGames() {
  return (
    <div>
      <div
        className="bg-black-alpha-90"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        <div>
          <a href="https://guessing-game-blue.vercel.app/">
            <h3 style={{ color: 'rebeccapurple' }}>Guessing Game</h3>
          </a>
          <Iframe
            url="https://guessing-game-blue.vercel.app/"
            width="800px"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
        <div>
          <a href="https://mugnificent-coffee-clicker.vercel.app/">
            <h3 style={{ color: 'rebeccapurple' }}>Idle Clicker</h3>
          </a>
          <Iframe
            url="https://mugnificent-coffee-clicker.vercel.app/"
            width="800px"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
}
