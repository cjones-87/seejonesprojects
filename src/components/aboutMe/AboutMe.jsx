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
        className="App bg-black-alpha-90"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AboutMeCards slides={AboutMeData} />
        </div>
        <div>
          <Specialization />
        </div>
        <div>
          <TechSkills />
        </div>
      </div>
    );
  }
}
