import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './SidePanelButtons.css';

import React from 'react';
import { Button } from 'primereact/button';

export default class SidePanelButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading1: false,
      loading2: false,
    };

    this.onLoadingClick1 = this.onLoadingClick1.bind(this);
    this.onLoadingClick2 = this.onLoadingClick2.bind(this);
  }

  onLoadingClick1() {
    this.setState({ loading1: true });
    setTimeout(() => {
      this.setState({ loading1: false });
    }, 2000);
  }

  onLoadingClick2() {
    this.setState({ loading2: true });
    setTimeout(() => {
      this.setState({ loading2: false });
    }, 2000);
  }

  render() {
    return (
      <div className="button">
        <div className="card">
          <h5>Related Pages</h5>
          <div
            className="template"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Button className="google p-0">
              <i className="pi pi-google px-2"></i>
              <a href="https://www.imgur.com">
                <span className="px-3">Google</span>
              </a>
            </Button>
            <Button className="youtube p-0">
              <i className="pi pi-youtube px-2"></i>
              <span className="px-3">Youtube</span>
            </Button>
            <Button className="vimeo p-0">
              <i className="pi pi-vimeo px-2"></i>
              <span className="px-3">Vimeo</span>
            </Button>
            <Button className="facebook p-0">
              <i className="pi pi-facebook px-2"></i>
              <span className="px-3">Facebook</span>
            </Button>
            <Button className="twitter p-0">
              <i className="pi pi-twitter px-2"></i>
              <span className="px-3">Twitter</span>
            </Button>
            <Button className="slack p-0">
              <i className="pi pi-slack px-2"></i>
              <span className="px-3">Slack</span>
            </Button>
            <Button className="amazon p-0">
              <i className="pi pi-amazon px-2"></i>
              <span className="px-3">Amazon</span>
            </Button>
            <Button className="discord p-0">
              <i className="pi pi-discord px-2"></i>
              <span className="px-3">Discord</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
