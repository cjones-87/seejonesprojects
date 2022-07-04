import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import './AboutMe.css';

import React from 'react';

import FullstackLogo from '../projects/FullstackLogo.png';

import { SiExpo } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

export default class AboutMe extends React.Component {
  render() {
    const handleError = (e) =>
      (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

    return (
      <div
        className="aboutMeParent bg-black-alpha-90"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
          paddingTop: '1rem',
        }}
      >
        <h1 style={{ color: 'rebeccapurple', paddingBottom: '1rem' }}>
          About Me
        </h1>
        <div>
          <div id="homeLogo" style={{ paddingBottom: '1.5rem' }}>
            <img
              alt="Card"
              src="https://i.imgur.com/YvqyfW5.png"
              onError={handleError}
              style={{ width: '300px', height: '300px', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div>
          <p>
            I, CJ Jones, am a software engineer living in NYC. I have
            successfully graduated from an immersive full-time software
            engineering program offered by Fullstack Academy. Currently, I
            freelance for individuals and brands across multiple industries.
          </p>
          <p>
            I have a passion for using technology to create intuitive & visually
            stimulating UI for enhanced user experiences. This, coupled with a
            penchant for furthering my knowledge and SWE skillset, gives me a
            love of combining existing best practices with innovative solutions
            to solve client & company needs.
          </p>
          <p>
            <small>I specialize in</small>&nbsp;
            <big>
              <FaReact /> <FaMobileAlt /> <SiExpo /> <FaNodeJs />
            </big>
            &nbsp;
            <small>for mobile development & &nbsp;</small>
            <big>
              <FaReact /> <DiJavascript1 /> <FaNodeJs />
            </big>
            &nbsp;
            <small>for web development</small>
          </p>
          <p>
            {/* My love for tech started at an early age, when my mother bought our
            first desktop pc. */}
          </p>
        </div>
      </div>
    );
  }
}
