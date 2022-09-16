import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import WhoAmI from './WhoAmI';
import './AboutMe.css';
import { AboutMeData } from './data/AboutMeData';

import React from 'react';

import Specialization from '../techSkills/Specialization';

import TechSkills from '../techSkills/TechSkills';

export default class AboutMe extends React.Component {
  render() {
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
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ paddingBottom: 100 }}>
          <WhoAmI slides={AboutMeData} />
        </div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ width: '100%', height: '100%' }}>&nbsp;</div>
        <div style={{ paddingTop: 100 }}>
          <Specialization />
        </div>
        <div>
          <TechSkills />
        </div>
      </div>
    );
  }
}
