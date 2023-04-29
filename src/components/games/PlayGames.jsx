import React from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const PlayGames = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        textShadow: '2px 2px 2px #01020E',
        width,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        <div>
          <a
            href="https://mugnificent-coffee-clicker.vercel.app/"
            style={{ fontSize: '1vmin' }}
          >
            <h1
              id="gradientText"
              style={{
                color:
                  localStorage.getItem('lightMode') === 'true'
                    ? 'black'
                    : '#434343',
                fontSize: '10em',
                paddingBottom: '2rem',
                textShadow:
                  localStorage.getItem('lightMode') === 'true'
                    ? '1px 1px 1px indigo'
                    : '1px 1px 1px whitesmoke',
              }}
            >
              Idle Clicker
            </h1>
          </a>

          <iframe
            className="myClassname"
            height={height / 1.5}
            id="myId"
            src="https://mugnificent-coffee-clicker.vercel.app/"
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>

        <div>
          <a
            href="https://guessing-game-blue.vercel.app/"
            style={{ fontSize: '1vmin' }}
          >
            <h1
              id="gradientText"
              style={{
                color: 'black',
                fontSize: '5em',
                paddingBottom: '1rem',
                textShadow:
                  localStorage.getItem('lightMode') === 'true'
                    ? '1px 1px 1px indigo'
                    : '1px 1px 1px whitesmoke',
              }}
            >
              Guessing Game
            </h1>
          </a>

          <iframe
            className="myClassname"
            height={height / 1.5}
            id="myId"
            src="https://guessing-game-blue.vercel.app/"
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayGames;
