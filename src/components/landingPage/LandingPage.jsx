import { useContext, useEffect } from 'react';
import { Button } from 'primereact/button';
import Typewriter from 'typewriter-effect';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';

const LandingPage = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const playSoundWhileEnteringSite = () => {
      setTimeout(() => (window.location.href = '/home'), 2000);
      const audio = new Audio(OpenUp);
      const audio2 = new Audio(AccessGrantedComputerVoice);
      let playAudio = () => {
        audio.play();
      };
      let playAudio2 = () => {
        setTimeout(() => audio2.play(), 500);
      };
      playAudio();
      playAudio2();
    };

    const siteEntrance = document.getElementById('enterSite');
    siteEntrance.addEventListener('click', playSoundWhileEnteringSite);
  });

  return (
    <div
      id="landingPageContainer"
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        width,
      }}
    >
      <h1
        id="gradientText"
        style={{
          color: darkTheme ? '#434343' : 'black',
          filter: darkTheme
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
        }}
      >
        <strong>CJ Jones</strong>
      </h1>

      <h2
        id="gradientText"
        style={{
          color: darkTheme ? '#434343' : 'black',
          filter: darkTheme
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
        }}
      >
        <Typewriter
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
        id="enterSite"
        label="See Jones Engineer"
        style={{
          background: darkTheme
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          color: darkTheme ? 'whitesmoke' : '#ba68c8',
          fontSize: '2em',
          margin: '2rem',
          padding: '1em',
          textShadow: '2px 2px 2px indigo',
        }}
      />
    </div>
  );
};

export default LandingPage;
