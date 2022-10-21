import React, { useState } from 'react';

import useLocalStorage from 'use-local-storage';

import { ToggleButton } from 'primereact/togglebutton';

export const DarkMode = () => {
  const [lightMode, setLightMode] = useLocalStorage('lightMode', 'true');

  const handleClick = () => {
    setLightMode((current) => (current = !current));
    const currentMode = localStorage.getItem('lightMode');
    window.location.reload();
  };
  return (
    <ToggleButton
      aria-label="Light/Dark Mode Toggle"
      checked={lightMode}
      className="w-full sm:w-3rem p-togglebuttons"
      offLabel=""
      offIcon="pi pi-sun"
      onChange={handleClick}
      onIcon="pi pi-moon"
      onLabel=""
      tooltip={lightMode ? 'switch to dark mode' : 'switch to light mode'}
      tooltipOptions={{ position: 'bottom' }}
    />
  );
};

const Footer = (props) => {
  return (
    <>
      <div
        className="button bg-black-alpha-90"
        style={{
          color: 'indigo',
          textShadow: '1px 1px 1px #f5f5f5', //changed from #01020E
          textAlign: 'center',
          paddingTop: '2rem',
        }}
      >
        {localStorage.getItem('lightMode')}
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <a
            href="https://www.seejonesengineer.com/assets/CJsSoftwareEngineeringResume.24a34476.pdf#"
            target="_blank"
          >
            <i className="fa fa-file-pdf fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a
            href="mailto:cj@seejonesengineer.com"
            style={{ color: 'indigo', textDecoration: 'none' }}
            target="_blank"
          >
            <i className="fa fa-at fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a href="https://www.linkedin.com/in/cjones1827/" target="_blank">
            <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a href="https://www.instagram.com/seejonesengineer/" target="_blank">
            <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          {/*  */}
          <DarkMode />
          {/*  */}

          <a href="https://twitter.com/cjonesengineer1" target="_blank">
            <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw"
            target="_blank"
          >
            <i className="fa fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a href="https://www.tiktok.com/@seejonesengineer" target="_blank">
            <i className="fab fa-tiktok fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>

          <a href="https://www.facebook.com/seejonesengineer/" target="_blank">
            <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>
        </div>

        <h5 className="bg-black-alpha-90">© 2022 by CJ Jones</h5>
      </div>
    </>
  );
};

export default Footer;

// export { darkMode };
