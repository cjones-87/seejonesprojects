import SidePanelMenu from '../menu/SidePanelMenu';
import DarkModeToggle from './DarkModeToggle';
import Typewriter from 'typewriter-effect';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Tooltip } from 'primereact/tooltip';
import { NavLink } from 'react-router-dom';

const resumeTooltip = 'Right Click to Open in New Window & Download';

export const menuItems = [
  {
    label: (
      <NavLink
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }} // classic rose rgb(251,204,231)
        to="/home"
      >
        <Typewriter
          options={{
            strings: 'Home',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-home',
  },
  {
    label: (
      <NavLink
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/aboutme"
      >
        <Typewriter
          options={{
            strings: 'About Me',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-info-circle',
  },
  {
    label: (
      <NavLink
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/learningjournal"
      >
        <Typewriter
          options={{
            strings: 'Learning Journal',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-history',
  },
  {
    label: (
      <NavLink
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/projects"
      >
        <Typewriter
          options={{
            strings: 'Projects',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-images',
  },
  {
    label: (
      <NavLink
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/playgames"
      >
        <Typewriter
          options={{
            strings: 'Interactive Games',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-play',
  },
  {
    label: (
      <NavLink
        className="resume"
        data-pr-position="bottom"
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/resume"
      >
        <Tooltip target=".resume" content={`${resumeTooltip}`} />
        <Typewriter
          options={{
            strings: 'Resumé',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-file-pdf',
  },
  {
    label: (
      <NavLink
        className="hireme"
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
        }}
        to="/hireme"
      >
        <Typewriter
          options={{
            strings: 'Hire Me',
            autoStart: true,
            loop: false,
          }}
        />
      </NavLink>
    ),
    icon: 'pi pi-fw pi-dollar',
    // target: 'blank',
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
