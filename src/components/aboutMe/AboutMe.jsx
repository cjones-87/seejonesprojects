import { useContext } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { AboutMeData } from './data/AboutMeData';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import AboutMeCards from './AboutMeCards';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import Specialization from '../techSkills/Specialization';
import TechSkills from '../techSkills/TechSkills';

const AboutMe = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        fontSize: '1vmin',
        marginTop: '-1.5rem',
        textAlign: 'center',
        width,
      }}
    >
      <h1
        id="gradientText"
        style={{
          color: !darkTheme ? 'black' : '#434343',
          fontSize: '10em',
          paddingTop: '2rem',
          textShadow: !darkTheme
            ? '1px 1px 1px indigo'
            : '1px 1px 1px whitesmoke',
        }}
      >
        About Me
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LazyLoadComponent>
          <AboutMeCards slides={AboutMeData} />
        </LazyLoadComponent>
      </div>

      <div>
        <LazyLoadComponent>
          <Specialization />
        </LazyLoadComponent>
      </div>

      <div>
        <LazyLoadComponent>
          <TechSkills />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default AboutMe;
