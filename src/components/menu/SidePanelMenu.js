import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import SidePanelButtons from './SidePanelButtons';

import TheLittleDwarf from '../../sounds/TheLittleDwarf.mp3';
import PowerDown from '../../sounds/PowerDown.mp3';

export default class SidePanelMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleCustomToolbar: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick = (event) => {
    const audio = new Audio(TheLittleDwarf);
    this.setState({ visibleCustomToolbar: true });
    let playAudio = (event) => audio.play();
    playAudio();
  };

  onHide = (event) => {
    const audio = new Audio(PowerDown);
    this.setState({ visibleCustomToolbar: false });
    let playAudio = (event) => audio.play();
    playAudio();
  };

  render() {
    const customIcons = (
      <React.Fragment>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-info-circle" />
        </button>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-arrow-right" />
        </button>
      </React.Fragment>
    );

    return (
      <div style={{ textAlign: 'center' }}>
        <div className="card">
          <Sidebar
            visible={this.state.visibleCustomToolbar}
            onHide={this.onHide}
            icons={customIcons}
          >
            <h3 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
              See Jones Engineer
            </h3>
            <SidePanelButtons />
          </Sidebar>

          <div>
            <div style={{ textAlign: 'center' }}>
              <Button
                icon="pi pi-comments"
                label="Network With Me"
                onClick={this.onClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
