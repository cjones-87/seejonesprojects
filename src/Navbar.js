import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';

import { Menubar } from 'primereact/menubar';

import SidePanelMenu from './components/menu/SidePanelMenu';

import MartianGun from './sounds/MartianGun.mp3';
import Quest from './sounds/Quest.mp3';
import Coins from './sounds/Coins.mp3';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    const mainAudio = new Audio(MartianGun);
    const gameAudio = new Audio(Quest);
    const hireAudio = new Audio(Coins);

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: (event) => {
          setTimeout(() => (window.location.href = '/home'), 1600);
          let playAudio = (event) => {
            mainAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-info-circle',
        command: (event) => {
          setTimeout(() => (window.location.href = '/aboutme'), 1600);
          let playAudio = (event) => {
            mainAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'Learning Journal',
        icon: 'pi pi-fw pi-history',
        command: (event) => {
          setTimeout(() => (window.location.href = '/learningjournal'), 1600);
          let playAudio = (event) => {
            mainAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-images',
        command: (event) => {
          setTimeout(() => (window.location.href = '/projects'), 1600);
          let playAudio = (event) => {
            mainAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'Interactive Games',
        icon: 'pi pi-fw pi-play',
        command: (event) => {
          setTimeout(() => (window.location.href = '/playgames'), 2000);
          let playAudio = (event) => {
            gameAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'Resume',
        icon: 'pi pi-fw pi-file',
        command: (event) => {
          setTimeout(() => (window.location.href = '/resume'), 1600);
          let playAudio = (event) => {
            mainAudio.play();
          };
          playAudio();
        },
      },
      {
        label: 'Hire Me',
        icon: 'pi pi-fw pi-dollar',
        command: (event) => {
          setTimeout(() => (window.location.href = '/hireme'), 250);
          let playAudio = (event) => {
            hireAudio.play();
          };
          playAudio();
        },
      },
    ];
  }

  render() {
    const start = (
      <img
        alt="logo"
        src="https://i.imgur.com/zUk8geK.png"
        onError={(e) => (e.target.src = 'https://i.imgur.com/OIdld69.png')}
        height="40"
        className="mr-2"
        style={{ borderRadius: '50%' }}
      ></img>
    );
    const end = (
      <div style={{ paddingTop: '1.5rem' }}>
        <SidePanelMenu />
      </div>
    );

    return (
      <div
        className="sticky top-0"
        id="navbar"
        style={{
          color: 'white',
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
