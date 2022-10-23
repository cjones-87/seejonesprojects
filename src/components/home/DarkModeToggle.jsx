import React, { useState } from 'react';

import useLocalStorage from 'use-local-storage';

import { ToggleButton } from 'primereact/togglebutton';

const DarkMode = () => {
  const [lightMode, setLightMode] = useLocalStorage('lightMode', 'true');

  const handleClick = () => {
    setLightMode((current) => (current = !current));
    const currentMode = localStorage.getItem('lightMode');
    window.location.reload();
  };
  return (
    <ToggleButton
      style={{
        backgroundColor:
          localStorage.getItem('lightMode') === 'true' ? '#0f0f0f' : '#cccccc',
      }}
      aria-label="Light/Dark Mode Toggle"
      checked={lightMode}
      className="w-full sm:w-3rem p-togglebutton"
      offLabel=""
      offIcon="pi pi-sun"
      onChange={handleClick}
      onClick={handleClick}
      onIcon="pi pi-moon"
      onLabel=""
      tooltip={lightMode ? 'switch to dark mode' : 'switch to light mode'}
      tooltipOptions={{ position: 'bottom' }}
    />
  );
};
export default DarkMode;
