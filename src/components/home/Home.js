import React from 'react';
import ProjectGallery from '../projects/ProjectGallery';
import '../../App.css';

import { Button } from 'primereact/button';

export default function Home() {
  const handleError = (e) => (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex">
        <div id="homeLogo">
          <img
            alt="Card"
            src="https://i.imgur.com/zUk8geK.png"
            onError={handleError}
            style={{ width: '300px', height: '300px', borderRadius: '50%' }}
          />
        </div>
        <div id="homeCJ">
          <img
            alt="Card"
            src="https://i.imgur.com/YvqyfW5.png"
            onError={handleError}
            style={{ width: '300px', height: '300px', borderRadius: '50%' }}
          />
        </div>
      </div>
      <ProjectGallery />
    </div>
  );
}
