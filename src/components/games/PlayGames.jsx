import React from 'react';

import Iframe from 'react-iframe';

export default function PlayGames() {
  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
      }}
    >
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-10 card'
            : 'bg-black-alpha-90 card'
        }
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
            width={window.innerWidth / 2.5}
            height={window.innerHeight / 2.5}
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            frameBorder={0}
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
            width={window.innerWidth / 2.5}
            height={window.innerHeight / 2.5}
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            frameBorder={0}
          />
        </div>
      </div>
    </div>
  );
}
