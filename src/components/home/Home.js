import React from 'react';
import ProjectGallery from '../projects/ProjectGallery';
import '../../App.css';

export default function Home() {
  const handleError = (e) => (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex">
        <div id="homeLogo">
          <img
            alt="Card"
            src="https://i.imgur.com/OIdld69.png"
            onError={handleError}
            style={{ width: '400px', height: '400px', borderRadius: '50%' }}
          />
        </div>
        <div id="homeCJ">
          <img
            alt="Card"
            src="https://i.imgur.com/9tPwe9z.jpg"
            onError={handleError}
            style={{ width: '250px', height: '400px', borderRadius: '25%' }}
          />
        </div>
        <div id="homeLogo">
          <img
            alt="Card"
            src="https://i.imgur.com/zUk8geK.png"
            onError={handleError}
            style={{ width: '400px', height: '400px', borderRadius: '50%' }}
          />
        </div>
      </div>
      <ProjectGallery />
    </div>
  );
}
