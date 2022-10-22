import React from 'react';

import { Menubar } from 'primereact/menubar';

import SidePanelMenu from '../menu/SidePanelMenu';

import Typewriter from 'typewriter-effect';

import { Tooltip } from 'primereact/tooltip';

import PDF from '../../CJsSoftwareEngineeringResume.pdf';

import DarkModeToggle from './DarkModeToggle';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeTooltip: 'Right Click to Open in New Window & Download',
    };

    this.items = [
      {
        label: (
          <Typewriter
            options={{
              strings: 'Home',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-home',
        command: (event) => {
          window.location.pathname = '/home';
        },
      },
      {
        label: (
          <Typewriter
            options={{
              strings: 'About Me',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-info-circle',
        command: (event) => {
          window.location.pathname = '/aboutme';
        },
      },
      {
        label: (
          <Typewriter
            options={{
              strings: 'Learning Journal',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-history',
        command: (event) => {
          window.location.pathname = '/learningjournal';
        },
      },
      {
        label: (
          <Typewriter
            options={{
              strings: 'Projects',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-images',
        command: (event) => {
          window.location.pathname = '/projects';
        },
      },
      {
        label: (
          <Typewriter
            options={{
              strings: 'Interactive Games',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-play',
        command: (event) => {
          window.location.pathname = '/playgames';
        },
      },
      {
        label: (
          <span className="resume" data-pr-position="bottom">
            <Tooltip target=".resume" content={`${this.state.resumeTooltip}`} />
            <Typewriter
              options={{
                strings: 'Resumé',
                autoStart: true,
                loop: false,
              }}
            />
          </span>
        ),
        icon: 'pi pi-fw pi-file',
        target: '_blank',
        command: (event) => {
          window.location.pathname = PDF;
        },
      },
      {
        label: (
          <Typewriter
            options={{
              strings: 'Hire Me',
              autoStart: true,
              loop: false,
            }}
          />
        ),
        icon: 'pi pi-fw pi-dollar',
        command: (event) => {
          window.location.pathname = '/hireme';
        },
      },
    ];
  }

  render() {
    const start = (
      <a href="/">
        <img
          alt="logo"
          src="https://i.imgur.com/zUk8geK.png"
          onError={(e) => (e.target.src = 'https://i.imgur.com/OIdld69.png')}
          height="75vh"
          className="mr-2"
          style={{ borderRadius: '50%' }}
        />
      </a>
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
          <Menubar model={this.items} start={start} end={end} />
        </div>
      </div>
    );
  }
}
