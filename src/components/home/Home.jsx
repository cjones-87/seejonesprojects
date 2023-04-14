import React, { useEffect, useState } from 'react';
import {
  LazyLoadComponent,
  LazyLoadImage,
} from 'react-lazy-load-image-component';
import Cube from './Cube';
import GithubActivity from './GithubActivity';
import BusinessCard from '../contactMe/BusinessCard';
import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';
import '../contactMe/BusinessCard.css';

const Home = () => {
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
    <div className="App" style={{ width: dimensions.width }}>
      <div id="homeFlex">
        <LazyLoadComponent>
          <Cube id="homeCJ" />
        </LazyLoadComponent>
      </div>

      <LazyLoadComponent>
        <ProjectSlideshow slides={ProjectData} />
      </LazyLoadComponent>

      <LazyLoadImage
        effect="blur"
        src="https://www.codewars.com/users/cjones-87/badges/large"
        style={{ marginTop: '2rem' }}
      />

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
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
