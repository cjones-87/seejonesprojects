import SidePanelMenu from '../menu/SidePanelMenu';
import DarkModeToggle from './DarkModeToggle';
import Typewriter from 'typewriter-effect';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export const menuItems = [
  {
    command: () => (window.location.pathname = '/home'),
    icon: 'pi pi-fw pi-home',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Home',
          }}
          style={{ color: 'red' }}
        />
      </span>
    ),
  },
  {
    command: () => (window.location.pathname = '/aboutme'),
    icon: 'pi pi-fw pi-info-circle',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'About',
          }}
        />
      </span>
    ),
  },
  {
    command: () => (window.location.pathname = '/learningjournal'),
    icon: 'pi pi-fw pi-history',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Timeline',
          }}
        />
      </span>
    ),
  },
  {
    command: () => (window.location.pathname = '/projects'),
    icon: 'pi pi-fw pi-images',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Projects',
          }}
        />
      </span>
    ),
  },
  {
    command: () => (window.location.pathname = '/playgames'),
    icon: 'pi pi-fw pi-play',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Games',
          }}
        />
      </span>
    ),
  },
  {
    icon: 'pi pi-fw pi-file-pdf',
    items: [
      {
        command: () => (window.location.pathname = '/resume'),
        icon: 'pi pi-fw pi-file-pdf',
        label: 'View Resumé',
      },
      {
        command: () =>
          (window.location.pathname = '/CJsSoftwareEngineeringResume.pdf'),
        icon: 'pi pi-download',
        label: 'Download Résumé',
      },
    ],
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          className="resume"
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Résumé',
          }}
        />
      </span>
    ),
  },
  {
    command: () => (window.location.pathname = '/hireme'),
    icon: 'pi pi-fw pi-dollar',
    label: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            cursor: '',
            loop: false,
            strings: 'Contact',
          }}
        />
      </span>
    ),
    target: 'blank',
  },
];

export const end = (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
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
