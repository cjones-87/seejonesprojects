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
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  useEffect(() => {
    const onOpen = (event) => {
      const audio = new Audio(TheLittleDwarf);
      setVisibleCustomToolbar((current) => !current);
      let playAudio = (event) => audio.play();
      playAudio();
    };

    const networkWithMeButton = document.getElementById('networkWithMe');
    networkWithMeButton.addEventListener('click', onOpen);
  });

  const onHide = (event) => {
    const audio = new Audio(PowerDown);
    setVisibleCustomToolbar((current) => !current);
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
        <Sidebar visible={visibleCustomToolbar} onHide={onHide} icons={''}>
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
                    strings: 'Network With Me',
                    autoStart: true,
                  }}
                />
              }
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
