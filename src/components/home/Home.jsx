import React from 'react';
import Cube from '../3dAnimations/home3dCube';

import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import '.././projects/ProjectSlideshow.css';
import '../../App.css';

import GithubSkyline2021 from './2021 Github Skyline.gif';
import GithubSkyline2022 from './2022 Github Skyline.gif';

export default function Home() {
  window.onresize = () => location.reload();
  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex" className="App bg-black-alpha-90">
        <Cube id="homeCJ" />
      </div>
      <ProjectSlideshow slides={ProjectData} />
      <div
        className="App bg-black-alpha-90"
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <img src={GithubSkyline2021} style={{ textAlign: 'center' }} />
        <img src={GithubSkyline2022} style={{ textAlign: 'center' }} />
      </div>
    </div>
  );
}
