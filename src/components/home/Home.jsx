import React, { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Cube from './Cube';
import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';
import BusinessCard from '../contactMe/BusinessCard';
import '../contactMe/BusinessCard.css';
import GithubActivity from './GithubActivity';

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

      <LazyLoadComponent>
        <ProjectSlideshow slides={ProjectData} />
      </LazyLoadComponent>

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <LazyLoadComponent>
          <BusinessCard />
        </LazyLoadComponent>
      </div>

      <GithubActivity />
    </div>
  );
};

export default Home;
