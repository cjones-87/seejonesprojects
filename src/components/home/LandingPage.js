import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './LandingPage.css';

import { Button } from 'primereact/button';

import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { DiJavascript1 } from 'react-icons/di';

import {
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiMaterialui,
  SiPostgresql,
  SiRedux,
  SiSemanticuireact,
  SiSequelize,
} from 'react-icons/si';

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
              I am a Freelance Software Engineer, committed to learning and
              continuing my career as a developer.
            </div>
            <div id="sectionB">
              To date, I have worked with the following technologies:&nbsp;
              <FaReact />
              &nbsp;&nbsp;
              <SiExpo />
              &nbsp;&nbsp;
              <FaNodeJs />
              &nbsp;&nbsp; <SiPostgresql />
              &nbsp;&nbsp; <SiSequelize />
              &nbsp;&nbsp; <SiRedux />
              &nbsp;&nbsp;
              <SiExpress />
              &nbsp;&nbsp; <SiMaterialui />
              &nbsp;&nbsp;
              <i className="pi pi-prime" style={{ fontSize: '1em' }} />
              &nbsp;&nbsp; <SiChakraui />
              &nbsp;&nbsp; <SiSemanticuireact />
            </div>
            <div id="sectionC">
              <div className="sectionC1">
                <FaReact /> & <FaReact />+<SiRedux /> Web Apps
              </div>
              <div className="sectionC2">
                <FaReact /> <FaMobileAlt /> <SiExpo /> Mobile Apps
              </div>
              <div className="sectionC3">
                <FaNodeJs />, <ImHtmlFive />, <SiCss3 /> - Basic Web Pages
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
