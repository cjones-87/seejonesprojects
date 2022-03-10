import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import SidePanelMenu from './components/menu/SidePanelMenu';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: (event) => {
          window.location.href = '/home';
        },
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-info-circle',
        command: (event) => {
          window.location.href = '/aboutme';
        },
      },
      {
        label: 'Learning Journal',
        icon: 'pi pi-fw pi-history',
        command: (event) => {
          window.location.href = '/learningjournal';
        },
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-images',
        command: (event) => {
          window.location.href = '/projects';
        },
      },
      {
        label: 'Interactive Games',
        icon: 'pi pi-fw pi-play',
        command: (event) => {
          window.location.href = '/playgames';
        },
      },
      {
        label: 'Resume',
        icon: 'pi pi-fw pi-file',
        command: (event) => {
          window.location.href = '/resume';
        },
      },
      {
        label: 'Contact Me',
        icon: 'pi pi-fw pi-phone',
        command: (event) => {
          window.location.href = '/contactme';
        },
      },
    ];
  }

  render() {
    const start = (
      <img
        alt="logo"
        src="https://i.imgur.com/zUk8geK.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        height="40"
        className="mr-2"
        style={{ borderRadius: '50%' }}
      ></img>
    );
    const end = <SidePanelMenu />;
    // const end = <InputText placeholder="Search" type="text" />;

    return (
      <div
        className="sticky top-0"
        style={{ position: 'sticky', zIndex: 1000 }}
      >
        <div className="card">
          <Menubar
            model={this.items}
            start={start}
            end={end}
            style={{ position: 'sticky' }}
          />
        </div>
      </div>
    );
  }
}
