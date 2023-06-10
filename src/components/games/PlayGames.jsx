import { useContext } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const PlayGames = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        paddingBottom: '2rem',
        textShadow: '2px 2px 2px indigo',
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
          <a href="https://iykyk-two.vercel.app/" style={{ fontSize: '1vmin' }}>
            <h1
              id="gradientText"
              style={{
                color: !darkTheme ? 'black' : '#434343',
                fontSize: '10em',
                paddingBottom: '2rem',
              }}
            >
              IYKYK
            </h1>
          </a>

          <iframe
            className="myClassname"
            height={height / 1.5}
            id="myId"
            src="https://iykyk-two.vercel.app/"
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>

        <div>
          <a
            href="https://mugnificent-coffee-clicker.vercel.app/"
            style={{ fontSize: '1vmin' }}
          >
            <h1
              id="gradientText"
              style={{
                color: !darkTheme ? 'black' : '#434343',
                fontSize: '10em',
                paddingBottom: '2rem',
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
