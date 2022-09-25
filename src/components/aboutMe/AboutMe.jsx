import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import AboutMeCards from './AboutMeCards';
import { AboutMeData } from './data/AboutMeData';

import React from 'react';

import Specialization from '../techSkills/Specialization';

import TechSkills from '../techSkills/TechSkills';

export default class AboutMe extends React.Component {
  render() {
    return (
      <div
        className="bg-black-alpha-90"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
          paddingTop: '1rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: 'rebeccapurple',
            paddingBottom: '1rem',
          }}
        >
          About Me
        </h1>

        <AboutMeCards slides={AboutMeData} />
        <div>{'\n\n\n\n\n\n'}</div>
        <div style={{ paddingTop: 75 }}>
          <Specialization />
        </div>
        <div>
          <TechSkills />
        </div>
      </div>
    );
  }
}
