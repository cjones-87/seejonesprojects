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

          <div>
            <div style={{ textAlign: 'center' }}>
              <Button
                icon="pi pi-comments"
                label="Network With Me"
                onClick={() => this.setState({ visibleCustomToolbar: true })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
