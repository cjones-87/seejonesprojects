import React from 'react';
import ProjectGallery from '../projects/ProjectGallery';
import '../../App.css';

import { Button } from 'primereact/button';

import SidePanelButtons from '../menu/SidePanelButtons';

export default function Home() {
  const handleError = (e) => (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

  return (
    <div className="App bg-black-alpha-90">
      <div id="homeFlex">
        <div id="homeLogo">
          <img
            alt="Card"
            src="https://i.imgur.com/zUk8geK.png"
            onError={handleError}
            style={{ width: '300px', height: '300px', borderRadius: '50%' }}
          />
        </div>
        <div id="homeCJ">
          <img
            alt="Card"
            src="https://i.imgur.com/YvqyfW5.png"
            onError={handleError}
            style={{ width: '300px', height: '300px', borderRadius: '50%' }}
          />
        </div>
      </div>
      <ProjectGallery />
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
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button className="linkedin p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-linkedin px-2"></i>
              <a
                href="https://www.linkedin.com/in/cjones1827/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">LinkedIn</span>
              </a>
            </Button>

            <Button className="youtube p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-youtube px-2"></i>
              <a
                href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Youtube</span>
              </a>
            </Button>

            <Button className="instagram p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-instagram px-2"></i>
              <a
                href="https://www.instagram.com/seejonesengineer/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Instagram</span>
              </a>
            </Button>

            <Button className="facebook p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-facebook px-2"></i>
              <a
                href="https://www.facebook.com/seejonesengineer"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Facebook</span>
              </a>
            </Button>

            <Button className="slack p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-slack px-2"></i>
              <a
                href="https://seejonesengineer.slack.com/archives/D037H4J82TU"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Slack</span>
              </a>
            </Button>

            <Button className="whatsapp p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-whatsapp px-2"></i>
              <a
                href="https://wa.me/3473918511"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">WhatsApp</span>
              </a>
            </Button>

            <Button className="twitter p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-twitter px-2"></i>
              <a
                href="https://twitter.com/cjonesengineer1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Twitter</span>
              </a>
            </Button>

            <Button className="github p-0" style={{ marginRight: '0.5em' }}>
              <i className="pi pi-github px-2"></i>
              <a
                href="https://github.com/cjones-87"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Github</span>
              </a>
            </Button>

            <Button className="money-bill p-0">
              <i className="pi pi-money-bill px-2"></i>
              <a
                href="https://www.buymeacoffee.com/cjonesengineer"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="px-3">Buy Me A Coffee</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
