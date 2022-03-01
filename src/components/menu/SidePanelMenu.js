import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import SidePanelButtons from './SidePanelButtons';

export default class SidePanelMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCustomToolbar: false,
    };
  }

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
            onHide={() => this.setState({ visibleCustomToolbar: false })}
            icons={customIcons}
          >
            <h3>See Jones Engineer</h3>
            <SidePanelButtons />
          </Sidebar>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ alignSelf: 'center' }}>
              <Button
                icon="pi pi-star"
                onClick={() => this.setState({ visibleCustomToolbar: true })}
              />
            </div>

            <div style={{ alignSelf: 'center' }}>
              <a href="https://www.buymeacoffee.com/cjonesengineer">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cjonesengineer&button_colour=BD5FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt=""
                />
              </a>
            </div>

            <div style={{ alignSelf: 'center' }}>
              <Button
                icon="pi pi-star"
                onClick={() => this.setState({ visibleCustomToolbar: true })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
