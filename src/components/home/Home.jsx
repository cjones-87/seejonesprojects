import React from 'react';
import Cube from '../3dAnimations/home3dCube';

import ProjectSlideshow from '../projects/ProjectSlideshow';
import { ProjectData } from '.././projects/data/ProjectData';
import '.././projects/ProjectSlideshow.css';
import '../../App.css';

export default function Home() {
  window.onresize = () => location.reload();
  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex">
        <Cube id="homeCJ" />
      </div>
      <ProjectSlideshow slides={ProjectData} />
    </div>
  );
}
