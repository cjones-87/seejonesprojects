import React from 'react';

import { Button } from 'primereact/button';

import './SidePanelButtons.css';

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
      <div
        className="button bg-black-alpha-90"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
        }}
      >
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
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Button className="linkedin p-0">
              <i className="pi pi-linkedin px-2" />
              <a
                href="https://www.linkedin.com/in/cjones1827/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  LinkedIn
                </span>
              </a>
            </Button>

            <Button className="youtube p-0">
              <i className="pi pi-youtube px-2" />
              <a
                href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Youtube
                </span>
              </a>
            </Button>

            <Button className="instagram p-0">
              <i className="pi pi-instagram px-2" />
              <a
                href="https://www.instagram.com/seejonesengineer/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Instagram
                </span>
              </a>
            </Button>

            <Button className="facebook p-0">
              <i className="pi pi-facebook px-2" />
              <a
                href="https://www.facebook.com/seejonesengineer"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Facebook
                </span>
              </a>
            </Button>

            <Button className="slack p-0">
              <i className="pi pi-slack px-2" />
              <a
                href="https://seejonesengineer.slack.com/archives/D037H4J82TU"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Slack
                </span>
              </a>
            </Button>

            <Button className="whatsapp p-0">
              <i
                className="pi pi-whatsapp px-2"
                target="_blank"
                rel="noreferrer noopener"
              />
              <a
                href="https://wa.me/3473918511"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  WhatsApp
                </span>
              </a>
            </Button>

            <Button className="twitter p-0">
              <i className="pi pi-twitter px-2" />
              <a
                href="https://twitter.com/cjonesengineer1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Twitter
                </span>
              </a>
            </Button>

            <Button className="github p-0">
              <i className="pi pi-github px-2" style={{ color: 'white' }} />
              <a
                href="https://github.com/cjones-87"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Github
                </span>
              </a>
            </Button>

            <Button className="tiktok p-0">
              <i className="fab fa-tiktok px-2" />
              <a
                href="https://www.tiktok.com/@seejonesengineer"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  TikTok
                </span>
              </a>
            </Button>

            <Button className="coffee p-0">
              <i className="fa fa-coffee px-2" />
              <a
                href="https://www.buymeacoffee.com/cjonesengineer"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3" style={{ color: 'white' }}>
                  Buy Me A Coffee
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
