import React, { useEffect, useState } from 'react';
import AboutMeCards from './AboutMeCards';
import { AboutMeData } from './data/AboutMeData';
import Specialization from '../techSkills/Specialization';
import TechSkills from '../techSkills/TechSkills';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const AboutMe = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        fontSize: '1vmin',
        marginTop: '-1.5rem',
        textAlign: 'center',
        width: innerWidth,
      }}
    >
      <h1
        id="gradientText"
        style={{
          color:
            localStorage.getItem('lightMode') === 'true' ? 'black' : '#434343',
          fontSize: '10em',
          paddingTop: '2rem',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
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
