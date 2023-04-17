import React, { useEffect, useState } from 'react';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from '../techSkills/TechSkillsData';
import { Button } from 'primereact/button';
import Typewriter from 'typewriter-effect';
import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

const LandingPageAlt = () => {
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
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      id="landingPageContainer"
      style={{ height: dimensions.height < 900 ? '230vh' : '125vh' }}
    >
      <h1 id="welcomeText">
        <strong>CJ Jones</strong>
      </h1>

      <h2 id="welcomeText" style={{ fontSize: '10em' }}>
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
          fontSize: '2em',
          margin: '2rem',
          padding: '1em',
        }}
      />

      <div id="sectionA" style={{ fontSize: '4em', width: dimensions.width }}>
        I am a freelance software engineer, passionate about learning &
        implementing new technologies. I am proficient in writing clean,
        efficient, DRY implementations. I am a fastidious engineer and
        perspicacious problem solver who can accomplish anything I set my mind
        to.
      </div>

      <div id="sectionC">
        <div
          align="center"
          id="sectionC1"
          style={{ width: dimensions.width / 3 }}
        >
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

        <div
          align="center"
          id="sectionC2"
          style={{ width: dimensions.width / 3 }}
        >
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

        <div
          align="center"
          id="sectionC1"
          style={{ width: dimensions.width / 3 }}
        >
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

      <div id="sectionC" style={{ width: dimensions.width }}>
        <div className="sectionC2" style={{ width: dimensions.width / 3 }}>
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

        <div className="sectionC1" style={{ width: dimensions.width / 3 }}>
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
        <div className="sectionC2" style={{ width: dimensions.width / 3 }}>
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
          width: dimensions.width,
        }}
      >
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: dimensions.width / 3 }}
        >
          Web Apps
        </div>
        <div
          className="sectionC2"
          style={{ fontSize: '3em', width: dimensions.width / 3 }}
        >
          Mobile Apps
        </div>
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: dimensions.width / 3 }}
        >
          Websites
        </div>
      </div>
    </div>
  );
};

export default LandingPageAlt;
