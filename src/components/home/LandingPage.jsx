import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './LandingPage.css';

import { Button } from 'primereact/button';

import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { DiJavascript1 } from 'react-icons/di';

import { SiCss3, SiExpo, SiRedux } from 'react-icons/si';

import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';

import Typewriter from 'typewriter-effect';

export default class LandingPage extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    setTimeout(() => (window.location.href = '/home'), 2000);
    const audio = new Audio(OpenUp);
    const audio2 = new Audio(AccessGrantedComputerVoice);
    let playAudio = (event) => {
      audio.play();
    };
    let playAudio2 = (event) => {
      setTimeout(() => audio2.play(), 500);
    };
    playAudio();
    playAudio2();
  };
  render() {
    return (
      <body id="landingPage">
        <div style={{ color: 'white', textShadow: '2px 2px 2px #01020E' }}>
          <header id="showcase">
            <div>
              <h1>
                <Typewriter
                  options={{
                    strings: 'Welcome! My Name is CJ Jones',
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h1>
              <p>
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Mobile Developer',
                      'Web Developer',
                      'Solutions Engineer',
                      'SWE Consultant',
                      'Mentor',
                      'Tutor',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <p>
                <small>
                  <Typewriter
                    options={{
                      strings: 'Specializing in',
                      autoStart: true,
                      loop: false,
                    }}
                  />
                </small>
                &nbsp;
                <big>
                  <FaReact /> <FaMobileAlt /> <SiExpo />
                </big>
                &nbsp;
                <small>
                  <Typewriter
                    options={{
                      strings: 'for mobile development',
                      autoStart: true,
                      loop: false,
                    }}
                  />
                </small>
                <big>
                  <FaReact /> <DiJavascript1 />
                </big>
                &nbsp;
                <small>
                  <Typewriter
                    options={{
                      strings: 'for web development',
                      autoStart: true,
                      loop: false,
                    }}
                  />
                </small>
              </p>

              <Button label="See Jones Engineer" onClick={this.onClick} />
            </div>
          </header>
          <div
            style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          >
            <div id="sectionA">
              I am a freelance software engineer, passionate about learning &
              implementing new technologies. I am proficient in writing clean,
              efficient, DRY implementations. I am a perspicacious problem
              solver and fastidious engineer who can accomplish anything I set
              my mind to.
            </div>
            <div id="sectionB">
              <h4 align="center"> Languages </h4>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
              </a>
            </div>
            <div id="sectionC">
              <div className="sectionC2">
                <h4 align="center"> Front-End </h4>

                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://mui.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
                    alt="MUI"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.primefaces.org/primereact/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.primefaces.org/primereact/images/primereact-logo-dark.svg"
                    alt="PrimeReact UI"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://chakra-ui.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/344/chakra-ui.png"
                    alt="Chakra UI"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://webpack.js.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/wired/344/ffffff/babel.png"
                    alt="babel"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
              <div className="sectionC1">
                <h4 align="center"> Tools </h4>

                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-filled-tal-revivo.png"
                    alt="netlify"
                    width="30"
                    height="25"
                  />
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/ffffff/external-glyph-shapes-tanah-basah-glyph-tanah-basah-69.png"
                    width="35"
                    height="35"
                    alt="vercel"
                  />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/dusk/45/000000/github.png"
                    width="40"
                    height="40"
                    alt="github"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/nolan/45/git.png"
                    width="40"
                    height="40"
                    alt="git"
                  />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/nolan/45/heroku.png"
                    width="40"
                    height="40"
                    alt="heroku"
                  />
                </a>
              </div>
              <div className="sectionC2">
                <h4 align="center"> Back-End </h4>

                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/fluency/344/node-js.png"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://sequelize.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg"
                    alt="sequelize"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="express"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>

            <div id="sectionC">
              <div className="sectionC1">
                <FaReact /> & <FaReact />+<SiRedux /> Web Apps
              </div>
              <div className="sectionC2">
                <FaReact /> <FaMobileAlt /> <SiExpo /> Mobile Apps
              </div>
              <div className="sectionC1">
                <FaNodeJs />, <ImHtmlFive />, <SiCss3 /> - Basic Web Pages
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
