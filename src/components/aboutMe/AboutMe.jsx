import { useContext, Suspense } from 'react';
import { AboutMeData } from './data/AboutMeData';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import Spinner from '../../../misc/Spinner';
import AboutMeCards from './AboutMeCards';
import Specialization from '../techSkills/Specialization';
import TechSkills from '../techSkills/TechSkills';

const AboutMe = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        fontSize: '1vmin',
        marginTop: '-1.5rem',
        textAlign: 'center',
        width: '100vw',
      }}
    >
      <h1
        id="gradientText"
        style={{
          color: darkTheme ? '#434343' : 'black',
          filter: darkTheme
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          paddingTop: '2rem',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        About Me
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Suspense fallback={<Spinner />}>
          <AboutMeCards slides={AboutMeData} />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<Spinner />}>
          <Specialization />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<Spinner />}>
          <TechSkills />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutMe;
