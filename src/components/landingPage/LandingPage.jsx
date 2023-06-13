import React, { useContext, useEffect } from 'react';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from '../techSkills/data/TechSkillsData';
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
      id="landingPageContainer"
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        height: height < 900 ? '230vh' : '125vh',
        width: '100vw',
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

      <div
        id="sectionA"
        style={{
          backgroundColor: darkTheme
            ? 'rgb(128, 128, 128, 0.3)'
            : 'rgb(75, 0, 130, 0.3)',
          color: 'whitesmoke',
          fontSize: '4em',
          width: '100vw',
        }}
      >
        I am a freelance software engineer, passionate about learning &
        implementing new technologies. I am proficient in writing clean,
        efficient, DRY implementations. I am a fastidious engineer and
        perspicacious problem solver who can accomplish anything I set my mind
        to.
      </div>

      <div id="sectionC" style={{ color: 'whitesmoke' }}>
        <div align="center" id="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Proficient Languages
          </h4>
          {LanguagesData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <img
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>

        <div align="center" id="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Familiar (Read-Only) Languages
          </h4>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />
          </a>
        </div>

        <div align="center" id="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Knowledgeable Languages
          </h4>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>

      <div id="sectionC" style={{ color: 'whitesmoke', width: '100vw' }}>
        <div className="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Front-End
          </h4>
          {FrontendData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <img
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>

        <div className="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Tools
          </h4>

          {ToolsData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <img
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>
        <div className="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Back-End
          </h4>

          {BackendData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <img
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>
      </div>

      <div
        id="sectionC"
        style={{
          width: '100vw',
        }}
      >
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Web Apps
        </div>
        <div
          className="sectionC2"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Mobile Apps
        </div>
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Websites
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
