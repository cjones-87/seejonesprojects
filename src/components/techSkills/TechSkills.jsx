import { useContext } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from './data/TechSkillsData';

const TechSkills = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        color: !darkTheme ? 'whitesmoke' : '#ba68c8',
        fontSize: '1vmin',
        textShadow: '2px 2px 2px indigo',
        paddingBottom: '2rem',
        paddingTop: '1rem',
      }}
    >
      <h4 align="center" style={{ fontSize: '3em' }}>
        <b>Languages </b>
      </h4>
      <div align="center">
        {LanguagesData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>

      <h4 align="center" style={{ fontSize: '3em' }}>
        <b>Front-End</b>
      </h4>
      <div align="center">
        {FrontendData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>
      <h4 align="center" style={{ fontSize: '3em' }}>
        <b>Back-End</b>
      </h4>
      <div align="center">
        {BackendData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>
      <h4 align="center" style={{ fontSize: '3em' }}>
        <b>Tools</b>
      </h4>
      <div align="center">
        {ToolsData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noreferrer">
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
