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
            strings: 'Home',
            autoStart: true,
            loop: false,
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
            strings: 'About Me',
            autoStart: true,
            loop: false,
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
            strings: 'Learning Journal',
            autoStart: true,
            loop: false,
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
            strings: 'Projects',
            autoStart: true,
            loop: false,
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
            strings: 'Interactive Games',
            autoStart: true,
            loop: false,
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
            strings: 'Résumé',
            autoStart: true,
            loop: false,
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
            strings: 'Hire Me',
            autoStart: true,
            loop: false,
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
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'middle',
    }}
  >
    <div style={{ paddingTop: '1.5rem' }}>
      <LazyLoadComponent>
        <SidePanelMenu />
      </LazyLoadComponent>
    </div>
    <div style={{ paddingLeft: '1rem', paddingTop: '1.5rem' }}>
      <LazyLoadComponent>
        <DarkModeToggle />
      </LazyLoadComponent>
    </div>
  </div>
);
