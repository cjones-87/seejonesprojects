import { useState, Suspense } from 'react';
import useTheme from '../../../misc/customHooks/useTheme';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Spinner from '../../../misc/Spinner';
import SidePanelButtons from './SidePanelButtons';
import TheLittleDwarf from '../../sounds/TheLittleDwarf.mp3';
import PowerDown from '../../sounds/PowerDown.mp3';
import Typewriter from 'typewriter-effect';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const SidePanelMenu = () => {
  const { darkMode } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  const onOpen = () => {
    const audio = new Audio(TheLittleDwarf);
    setShowSidebar((current) => !current);
    let playAudio = () => audio.play();
    playAudio();
  };

  const onHide = () => {
    const audio = new Audio(PowerDown);
    setShowSidebar((current) => !current);
    let playAudio = () => audio.play();
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
      <div className='card'>
        <Sidebar
          icons={''}
          onHide={onHide}
          style={{
            background: !darkMode
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          }}
          visible={showSidebar}
        >
          <h3
            style={{
              color: !darkMode ? 'whitesmoke' : '#ba68c8',
              textAlign: 'center',
              textShadow: '2px 2px 2px indigo',
            }}
          >
            See Jones Engineer
          </h3>
          <Suspense fallback={<Spinner />}>
            <SidePanelButtons />
          </Suspense>
        </Sidebar>

        <div>
          <div style={{ textAlign: 'center' }}>
            <Button
              id='networkWithMe'
              icon='pi pi-comments'
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
                background: !darkMode
                  ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                  : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
                color: !darkMode ? '#ba68c8' : 'whitesmoke',
                filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
                height: '2.5em',
                textShadow: '2px 2px 2px indigo',
                width: '8em',
              }}
              tooltip='like what you see? network with me!'
              tooltipOptions={{ mousetrack: true, position: 'left' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanelMenu;
