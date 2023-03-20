import React, { useEffect, useState } from 'react';

import useLocalStorage from 'use-local-storage';

import { ToggleButton } from 'primereact/togglebutton';

const DarkMode = () => {
  console.log(React);
  const [lightMode, setLightMode] = useLocalStorage('lightMode', 'true');
  console.log(localStorage);

  useEffect(() => {
    const toggleLightDarkMode = () => {
      setLightMode((current) => (current = !current));
      window.location.reload();
    };

    const toggleButton = document.getElementById('lightDarkToggleButton');

    toggleButton.addEventListener('click', toggleLightDarkMode);
  }, [lightMode]);

  return (
    <ToggleButton
      id="lightDarkToggleButton"
      style={{
        backgroundColor:
          localStorage.getItem('lightMode') === 'true' ? '#cccccc' : '#0f0f0f',
      }}
      aria-label="Light/Dark Mode Toggle"
      checked={lightMode}
      className="w-full sm:w-3rem p-togglebutton"
      offLabel=""
      offIcon="pi pi-sun"
      onIcon="pi pi-moon"
      onLabel=""
      tooltip={lightMode ? 'switch to dark mode' : 'switch to light mode'}
      tooltipOptions={{ position: 'bottom' }}
    />
  );
};
export default DarkMode;
