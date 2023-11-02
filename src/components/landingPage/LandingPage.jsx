import { lazy, useEffect } from 'react';
import { Button } from 'primereact/button';
import Typewriter from 'typewriter-effect';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

const LandingPageLogo = lazy(() => import('./LandingPageLogo'));
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const LandingPage = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();

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
      <Head
        title='Crafting User-Centric Excellence: CJ Jones, Software Engineer'
        description={`CJ Jones, a seasoned software engineer, excels in crafting user-centric software solutions that seamlessly blend intuitive design with powerful functionality. With a focus on creating visually captivating user experiences, CJ specializes in developing sophisticated logic systems that elevate the overall usability of applications. Explore the intersection of cutting-edge technology and user-friendly design with CJ Jones, your go-to expert for software engineering excellence.`}
      />

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

      <LandingPageLogo />
    </div>
  );
};

export default LandingPage;
