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
          paddingTop: '1rem',
        }}
      >
        <div>
          <a href="https://guessing-game-blue.vercel.app/">
            <h1 style={{ color: 'rebeccapurple', paddingBottom: '1rem' }}>
              Guessing Game
            </h1>
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
            <h1 style={{ color: 'rebeccapurple', paddingBottom: '1rem' }}>
              Idle Clicker
            </h1>
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
