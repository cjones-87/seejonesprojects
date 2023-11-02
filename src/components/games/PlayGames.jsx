import { lazy } from 'react';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const PlayGames = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        paddingBottom: '2rem',
        textShadow: '2px 2px 2px indigo',
        width,
      }}
    >
      <Head
        title='Game Zone: Immerse Yourself in Interactive Adventures'
        description={`Welcome to the Game Zone, where entertainment meets innovation! Explore a collection of interactive games meticulously crafted by CJ Jones, your gateway to thrilling digital adventures. Immerse yourself in engaging challenges and captivating experiences that showcase the seamless fusion of creativity and technology. Whether you're a casual gamer or a seasoned player, embark on a journey of fun and discovery in this interactive playground. Let the games begin!`}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        <div>
          <a href='https://iykyk-two.vercel.app/' style={{ fontSize: '1vmin' }}>
            <h1
              id='gradientText'
              style={{
                color: darkMode ? '#434343' : 'black',
                filter: darkMode
                  ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                  : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                fontSize: '10em',
                paddingBottom: '2rem',
              }}
            >
              IYKYK
            </h1>
          </a>

          <iframe
            className='myClassname'
            height={height / 1.5}
            id='myId'
            src='https://iykyk-two.vercel.app/'
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>

        <div>
          <a
            href='https://mugnificent-coffee-clicker.vercel.app/'
            style={{ fontSize: '1vmin' }}
          >
            <h1
              id='gradientText'
              style={{
                color: darkMode ? '#434343' : 'black',
                filter: darkMode
                  ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                  : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                fontSize: '10em',
                paddingBottom: '2rem',
              }}
            >
              Idle Clicker
            </h1>
          </a>

          <iframe
            className='myClassname'
            height={height / 1.5}
            id='myId'
            src='https://mugnificent-coffee-clicker.vercel.app/'
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>

        <div>
          <a
            href='https://guessing-game-blue.vercel.app/'
            style={{ fontSize: '1vmin' }}
          >
            <h1
              id='gradientText'
              style={{
                color: 'black',
                filter: darkMode
                  ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                  : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                fontSize: '5em',
                paddingBottom: '1rem',
              }}
            >
              Guessing Game
            </h1>
          </a>

          <iframe
            className='myClassname'
            height={height / 1.5}
            id='myId'
            src='https://guessing-game-blue.vercel.app/'
            style={{ border: 0 }}
            width={width / 1.5}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayGames;
