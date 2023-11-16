import { useEffect } from 'react';
import { Button } from 'primereact/button';
import TypewriterComponent from 'typewriter-effect';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

const LandingPage = ({ handleEntranceClick }) => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const siteEntrance = document.getElementById('enterSite');
    console.log();
    if (siteEntrance) {
      siteEntrance.addEventListener('click', handleEntranceClick);
    }

    return () => {
      const siteEntrance = document.getElementById('enterSite');
      if (siteEntrance) {
        siteEntrance.removeEventListener('click', handleEntranceClick);
      }
    };
  }, []);

  return (
    <div
      id='landingPageContainer'
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        height: height * 0.9,
        width,
        zIndex: '1',
      }}
    >
      <h1
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          zIndex: '1',
        }}
      >
        <strong>CJ Jones</strong>
      </h1>

      <h2
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          zIndex: '1',
        }}
      >
        <TypewriterComponent
          options={{
            autoStart: true,
            cursor: '',
            delay: 125,
            loop: true,
            strings: [
              'Software Engineer',
              'Mobile Developer',
              'Web Developer',
              'Consultant',
              'Mentor',
              'Tutor',
            ],
          }}
        />
      </h2>

      <Button
        id='enterSite'
        label='See Jones Engineer'
        style={{
          background: darkMode
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          color: darkMode ? 'whitesmoke' : '#ba68c8',
          fontSize: '2em',
          margin: '2rem',
          padding: '1em',
          textShadow: '2px 2px 2px indigo',
          zIndex: '1',
        }}
      />
    </div>
  );
};

export default LandingPage;
