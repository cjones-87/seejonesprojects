import React, { useEffect, useState } from 'react';

export default function PlayGames() {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
        width: dimensions.width,
      }}
    >
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 card'
            : 'bg-black-alpha-90 card'
        }
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          paddingTop: '1rem',
        }}
      >
        <div>
          <a href="https://mugnificent-coffee-clicker.vercel.app/">
            <h1
              style={{
                color: 'rebeccapurple',
                paddingBottom: '1rem',
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
            height={dimensions.height / 1.5}
            id="myId"
            src="https://mugnificent-coffee-clicker.vercel.app/"
            width={dimensions.width / 1.5}
          />
        </div>

        <div>
          <a href="https://guessing-game-blue.vercel.app/">
            <h1
              style={{
                color: 'rebeccapurple',
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
            height={dimensions.height / 1.5}
            id="myId"
            src="https://guessing-game-blue.vercel.app/"
            width={dimensions.width / 1.5}
          />
        </div>
      </div>
    </div>
  );
}
