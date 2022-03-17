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
      <div className="button bg-black-alpha-90">
        <div className="card bg-black-alpha-90">
          <h5
            style={{
              textAlign: 'center',
              paddingTop: 10,
              color: 'rebeccapurple',
            }}
          >
            Stay connected with me & my work by following me on:
          </h5>
          <div
            className="template"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Button className="linkedin p-0">
              <i className="pi pi-linkedin px-2"></i>
              <a href="https://www.linkedin.com/in/cjones1827/">
                <span className="px-3">LinkedIn</span>
              </a>
            </Button>

            <Button className="youtube p-0">
              <i className="pi pi-youtube px-2"></i>
              <a href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw">
                <span className="px-3">Youtube</span>
              </a>
            </Button>

            <Button className="instagram p-0">
              <i className="pi pi-instagram px-2"></i>
              <a href="https://www.instagram.com/seejonesengineer/">
                <span className="px-3">Instagram</span>
              </a>
            </Button>

            <Button className="facebook p-0">
              <i className="pi pi-facebook px-2"></i>
              <a href="https://www.facebook.com/seejonesengineer">
                <span className="px-3">Facebook</span>
              </a>
            </Button>

            <Button className="slack p-0">
              <i className="pi pi-slack px-2"></i>
              <a href="https://seejonesengineer.slack.com/archives/D037H4J82TU">
                <span className="px-3">Slack</span>
              </a>
            </Button>

            <Button className="google p-0">
              <i className="pi pi-google px-2"></i>
              <a href="https://www.google.com">
                <span className="px-3">Google</span>
              </a>
            </Button>

            <Button className="whatsapp p-0">
              <i className="pi pi-whatsapp px-2"></i>
              <a href="https://wa.me/3473918511">
                <span className="px-3">WhatsApp</span>
              </a>
            </Button>

            <Button className="twitter p-0">
              <i className="pi pi-twitter px-2"></i>
              <a href="https://twitter.com/cjonesengineer1">
                <span className="px-3">Twitter</span>
              </a>
            </Button>

            <Button className="github p-0">
              <i className="pi pi-github px-2"></i>
              <a href="https://github.com/cjones-87">
                <span className="px-3">Github</span>
              </a>
            </Button>

            {/* <Button className="paypal p-0 bg-black-alpha-20">
              <i className="pi pi-paypal px-2"></i>
              <span className="px-3">Paypal</span>
            </Button> */}

            <Button className="money-bill p-0">
              <i className="pi pi-money-bill px-2"></i>
              <a href="https://www.buymeacoffee.com/cjonesengineer">
                <span className="px-3">Buy Me A Coffee</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
