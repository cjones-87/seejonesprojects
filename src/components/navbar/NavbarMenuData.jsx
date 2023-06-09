import SidePanelMenu from '../menu/SidePanelMenu';
import DarkModeToggle from './DarkModeToggle';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export const end = (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '1rem',
      paddingRight: '.5em',
      placeContent: 'center',
      verticalAlign: 'middle',
    }}
  >
    <div style={{ paddingLeft: '.5rem', paddingTop: '2rem' }}>
      <LazyLoadComponent>
        <SidePanelMenu />
      </LazyLoadComponent>
    </div>
    <div style={{ paddingLeft: '1rem' }}>
      <LazyLoadComponent>
        <DarkModeToggle />
      </LazyLoadComponent>
    </div>
  </div>
);
