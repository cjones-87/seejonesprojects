import useTheme from '../../../misc/customHooks/useTheme';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from './data/TechSkillsData';

const TechSkills = () => {
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        color: darkMode ? '#ba68c8' : 'whitesmoke',
        fontSize: '1vmin',
        textShadow: '2px 2px 2px indigo',
        paddingBottom: '2rem',
        paddingTop: '1rem',
      }}
    >
      <h4 align='center' style={{ fontSize: '3em' }}>
        <b>Languages </b>
      </h4>
      <div align='center'>
        {LanguagesData.map((item, index) => (
          <a href={item.href} key={index} target='_blank' rel='noreferrer'>
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>

      <h4 align='center' style={{ fontSize: '3em' }}>
        <b>Front-End</b>
      </h4>
      <div align='center'>
        {FrontendData.map((item, index) => (
          <a href={item.href} key={index} target='_blank' rel='noreferrer'>
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>
      <h4 align='center' style={{ fontSize: '3em' }}>
        <b>Back-End</b>
      </h4>
      <div align='center'>
        {BackendData.map((item, index) => (
          <a href={item.href} key={index} target='_blank' rel='noreferrer'>
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>
      <h4 align='center' style={{ fontSize: '3em' }}>
        <b>Tools</b>
      </h4>
      <div align='center'>
        {ToolsData.map((item, index) => (
          <a href={item.href} key={index} target='_blank' rel='noreferrer'>
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
