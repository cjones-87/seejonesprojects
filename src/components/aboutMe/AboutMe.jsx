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
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20 App card'
          : 'bg-black-alpha-90 App card'
      }
      style={{
        color: 'white',
        fontSize: '1vmin',
        textAlign: 'center',
        width: innerWidth,
      }}
    >
      <h1
        id="welcomeText"
        style={{
          color: 'rebeccapurple',
          fontSize: '5em',
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
