import React from 'react';
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
  window.onresize = () => location.reload();
  return (
    <div className="App">
      <div id="homeFlex">
        <Cube id="homeCJ" />
      </div>
      <ProjectSlideshow slides={ProjectData} />
      <div
        className="App bg-black-alpha-90 card"
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <a href="https://skyline.github.com/cjones-87/2021">
          <img
            src={GithubSkyline2021}
            style={{ textAlign: 'center', width: window.innerWidth / 3 }}
          />
        </a>
        <a href="https://skyline.github.com/cjones-87/2022">
          <img
            src={GithubSkyline2022}
            style={{ textAlign: 'center', width: window.innerWidth / 3 }}
          />
        </a>
      </div>
    </div>
  );
}
