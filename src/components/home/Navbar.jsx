import React from 'react';

import { Menubar } from 'primereact/menubar';

import SidePanelMenu from '../menu/SidePanelMenu';

import Typewriter from 'typewriter-effect';

import { Tooltip } from 'primereact/tooltip';

import { NavLink } from 'react-router-dom';

import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const resumeTooltip = 'Right Click to Open in New Window & Download';

  const items = [
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#fbcce7'
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
                ? '#fbcce7'
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
                ? '#fbcce7'
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
                ? '#fbcce7'
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
                ? '#fbcce7'
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
                ? '#fbcce7'
                : 'whitesmoke',
          }}
          to={'/resume'}
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
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#fbcce7'
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
    },
  ];

  const start = (
    <NavLink to="/">
      <img
        alt="logo"
        src="https://i.imgur.com/zUk8geK.png"
        onError={(e) => (e.target.src = 'https://i.imgur.com/OIdld69.png')}
        height="75vh"
        className="mr-2"
        style={{ borderRadius: '50%' }}
      />
    </NavLink>
  );
  const end = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div style={{ paddingTop: '1.5rem' }}>
        <SidePanelMenu />
      </div>
      <div style={{ paddingLeft: '1rem', paddingTop: '1.5rem' }}>
        <DarkModeToggle />
      </div>
    </div>
  );

  return (
    <div
      className="sticky top-0"
      id="navbar"
      style={{
        color: localStorage.getItem('lightMode') ? 'black' : 'white',
        textShadow: '2px 2px 2px #01020E',
      }}
    >
      <div className="card">
        <Menubar
          model={items}
          start={start}
          end={end}
          style={{ width: innerWidth }}
        />
      </div>
    </div>
  );
};

export default Navbar;
