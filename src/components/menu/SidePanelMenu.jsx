import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import SidePanelButtons from './SidePanelButtons';
import TheLittleDwarf from '../../sounds/TheLittleDwarf.mp3';
import PowerDown from '../../sounds/PowerDown.mp3';
import Typewriter from 'typewriter-effect';

const SidePanelMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const onOpen = (event) => {
      const audio = new Audio(TheLittleDwarf);
      setShowSidebar((current) => !current);
      let playAudio = (event) => audio.play();
      playAudio();
    };

    const networkWithMeButton = document.getElementById('networkWithMe');
    networkWithMeButton.addEventListener('click', onOpen);
  });

  const onHide = (event) => {
    const audio = new Audio(PowerDown);
    setShowSidebar((current) => !current);
    let playAudio = (event) => audio.play();
    playAudio();
  };

  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        textAlign: 'center',
      }}
    >
      <div className="card">
        <Sidebar
          visible={showSidebar}
          onHide={onHide}
          icons={''}
          style={{
            background:
              localStorage.getItem('lightMode') === 'true'
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          }}
        >
          <h3 style={{ textAlign: 'center', color: 'white' }}>
            See Jones Engineer
          </h3>
          <LazyLoadComponent>
            <SidePanelButtons />
          </LazyLoadComponent>
        </Sidebar>

        <div>
          <div style={{ textAlign: 'center' }}>
            <Button
              id="networkWithMe"
              icon="pi pi-comments"
              label={
                <Typewriter
                  options={{
                    autoStart: true,
                    cursor: '',
                    strings: 'Network With Me',
                  }}
                />
              }
              style={{
                background:
                  localStorage.getItem('lightMode') === 'true'
                    ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                    : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
                color:
                  localStorage.getItem('lightMode') === 'true'
                    ? '#ba68c8'
                    : 'whitesmoke',
                height: '2.5em',
                width: '8em',
              }}
              tooltip="like what you see? network with me!"
              tooltipOptions={{ mousetrack: true, position: 'left' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanelMenu;
