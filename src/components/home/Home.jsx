import React from 'react';
import Cube from '../3dAnimations/home3dCube';
import ProjectGallery from '../projects/ProjectGallery';
import '../../App.css';

export default function Home() {
  const handleError = (e) => (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex">
        <Cube id="homeCJ" />
        {/* <div id="homeLogo">
          <img
            alt="Card"
            src="https://i.imgur.com/zUk8geK.png"
            onError={handleError}
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }}
          />
        </div>
        <div id="homeCJ">
          <img
            alt="Card"
            src="https://i.imgur.com/YvqyfW5.png"
            onError={handleError}
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }}
          />
        </div> */}
      </div>
      <ProjectGallery />
    </div>
  );
}
