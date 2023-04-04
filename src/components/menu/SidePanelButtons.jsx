import React from 'react';
import { Button } from 'primereact/button';
import SidePanelButtonData from './SidePanelButtonData';

const SidePanelButtons = () => {
  return (
    <div
      className="button"
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
          {SidePanelButtonData.map((button, index) => (
            <Button className={button.buttonClassName} key={index}>
              <i className={button.iconClassName} />
              <a href={button.href} target="_blank" rel="noreferrer noopener">
                <span className="px-3" style={{ color: 'white' }}>
                  {button.buttonText}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanelButtons;
