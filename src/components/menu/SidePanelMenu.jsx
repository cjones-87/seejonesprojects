import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import SidePanelButtons from './SidePanelButtons';
import TheLittleDwarf from '../../sounds/TheLittleDwarf.mp3';
import PowerDown from '../../sounds/PowerDown.mp3';
import Typewriter from 'typewriter-effect';

const SidePanelMenu = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const onOpen = (event) => {
    const audio = new Audio(TheLittleDwarf);
    setShowSidebar((current) => !current);
    let playAudio = (event) => audio.play();
    playAudio();
  };

  const onHide = (event) => {
    const audio = new Audio(PowerDown);
    setShowSidebar((current) => !current);
    let playAudio = (event) => audio.play();
    playAudio();
  };

  return (
    <div
      style={{
        color: 'whitesmoke',
        textAlign: 'center',
        textShadow: '2px 2px 2px indigo',
      }}
    >
      <div className="card">
        <Sidebar
          icons={''}
          onHide={onHide}
          style={{
            background: !darkTheme
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          }}
          visible={showSidebar}
        >
          <h3
            style={{
              color: 'whitesmoke',
              textAlign: 'center',
              textShadow: '2px 2px 2px indigo',
            }}
          >
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
              onClick={onOpen}
              style={{
                background: !darkTheme
                  ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                  : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
                color: !darkTheme ? '#ba68c8' : 'whitesmoke',
                filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
                height: '2.5em',
                textShadow: '2px 2px 2px indigo',
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
