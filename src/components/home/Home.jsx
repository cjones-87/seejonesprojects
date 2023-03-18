import React, { useEffect, useState } from 'react';
import Cube from './Cube';
import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';
import BusinessCard from '../contactMe/BusinessCard';
import '../contactMe/BusinessCard.css';

const Home = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div className="App" style={{ width: dimensions.width }}>
      <div id="homeFlex">
        <Cube id="homeCJ" />
      </div>

      <ProjectSlideshow slides={ProjectData} />

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <BusinessCard />
      </div>
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 App card'
            : 'bg-black-alpha-90 App card'
        }
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <a href="https://skyline.github.com/cjones-87/2021">
          <iframe
            src="https://www.youtube.com/embed/BAhz7BLA3rA"
            height={dimensions.height / 3}
            allow="autoplay"
          ></iframe>
        </a>

        <a href="https://skyline.github.com/cjones-87/2022">
          <iframe
            src="https://www.youtube.com/embed/fwvVifpo93o"
            width={dimensions.width / 3}
            height={dimensions.height / 3}
            allow="autoplay"
          ></iframe>
        </a>

        <a href="https://skyline.github.com/cjones-87/2023">
          <iframe
            src="https://www.youtube.com/embed/-jgXmlOViws"
            width={dimensions.width / 3}
            height={dimensions.height / 3}
            allow="autoplay"
          ></iframe>
        </a>
      </div>
    </div>
  );
};

export default Home;
