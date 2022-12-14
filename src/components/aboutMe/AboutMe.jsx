import AboutMeCards from './AboutMeCards';
import { AboutMeData } from './data/AboutMeData';

import React from 'react';

import Specialization from '../techSkills/Specialization';

import TechSkills from '../techSkills/TechSkills';

const AboutMe = () => {
  const [dimensions, setDimensions] = React.useState({
    height: innerHeight,
    width: innerWidth,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20 App card'
          : 'bg-black-alpha-90 App card'
      }
      style={{
        color: 'white',
        textAlign: 'center',
        width: innerWidth,
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
};

export default AboutMe;
