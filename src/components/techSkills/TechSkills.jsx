import React from 'react';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from './TechSkillsData';

export default function TechSkills() {
  return (
    <div
      style={{
        color:
          localStorage.getItem('lightMode') === 'true' ? 'indigo' : 'white',
        textShadow:
          localStorage.getItem('lightMode') === 'true'
            ? '2px 2px 2px whitesmoke'
            : '2px 2px 2px indigo',
        paddingTop: '1rem',
      }}
    >
      <h4 align="center">
        <b>Languages </b>
      </h4>
      <div align="center">
        {LanguagesData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.alt} width="40" height="40" />
          </a>
        ))}
      </div>

      <h4 align="center">
        <b>Front-End</b>
      </h4>
      <div align="center">
        {FrontendData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.alt} width="40" height="40" />
          </a>
        ))}
      </div>
      <h4 align="center">
        <b>Back-End</b>
      </h4>
      <div align="center">
        {BackendData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.alt} width="40" height="40" />
          </a>
        ))}
      </div>
      <h4 align="center">
        <b>Tools</b>
      </h4>
      <div align="center">
        {ToolsData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.alt} width="40" height="40" />
          </a>
        ))}
      </div>
    </div>
  );
}
