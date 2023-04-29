import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import useLocalStorage from 'use-local-storage';

const DarkMode = () => {
  const [lightMode, setLightMode] = useLocalStorage('lightMode', 'true');

  useEffect(() => {
    const toggleLightDarkMode = () => {
      setLightMode((current) => !current);
      window.location.reload();
    };

    const toggleButton = document.getElementById('lightDarkToggleButton');

    toggleButton.addEventListener('click', toggleLightDarkMode);
  }, [lightMode]);

  return (
    <div style={{ colorScheme: 'red' }}>
      <Button
        className=" p-togglebutton"
        id="lightDarkToggleButton"
        style={{
          background:
            localStorage.getItem('lightMode') === 'true'
              ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
              : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          height: '2.5em',
        }}
        // label={lightMode ? 'Dark Mode' : 'Light Mode'}
        icon={lightMode ? 'pi pi-moon' : 'pi pi-sun'}
        tooltip={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        tooltipOptions={{ position: 'bottom' }}
        toggleable="true"
      />
    </div>
  );
};
export default DarkMode;
