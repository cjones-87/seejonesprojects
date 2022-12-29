import React, { useEffect, useState } from 'react';
import Cube from './Cube';

import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';

import {
  GithubSkyline2021,
  GithubSkyline2022,
} from '../../photos/PhotoExports';

export default function Home() {
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
          <img
            src={GithubSkyline2021}
            style={{ textAlign: 'center', width: dimensions.width / 3 }}
          />
        </a>
        <a href="https://skyline.github.com/cjones-87/2022">
          <img
            src={GithubSkyline2022}
            style={{ textAlign: 'center', width: dimensions.width / 3 }}
          />
        </a>
      </div>
    </div>
  );
}
