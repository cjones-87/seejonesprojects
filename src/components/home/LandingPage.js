import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './LandingPage.css';

import { Button } from 'primereact/button';

export default function LandingPage() {
  return (
    <body id="landingPage">
      <div>
        <header id="showcase">
          <div>
            <h2>Hello!</h2>
            <h1>My Name is CJ</h1>
            <p>Full Stack Software Engineer & Front End Developer</p>
            <p>
              <small>Specializing in</small> <big>React Native Expo</big>{' '}
              <small>for mobile development & &nbsp;</small>
              <big>React JS</big> <small>for web development</small>
            </p>
            <a href="/home" alt="">
              <Button label="See Jones Engineer" />
            </a>
          </div>
        </header>
        <div id="sectionA">
          I am a FullStack Academy graduate, committed to learning and
          continuing my career as a developer.
        </div>
        <div id="sectionB">
          To date, I have worked with the following
          languages/frameworks/libraries: React, React Native Expo, NodeJS,
          PostgreSQL, Sequelize, Redux, Express, MUI, PrimeReact UI, Chakra UI,
          Semantic UI
        </div>
        <div id="sectionC">
          <div className="sectionC1">React & React/Redux - Web Apps</div>
          <div className="sectionC2">React Native Expo - Mobile Apps</div>
          <div className="sectionC3">JS, HTML, CSS - Basic Web Pages</div>
        </div>
      </div>
    </body>
  );
}
