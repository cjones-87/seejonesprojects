import { useContext } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import { Button } from 'primereact/button';

const DarkModeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button
        className=" p-togglebutton"
        id="lightDarkToggleButton"
        style={{
          background: !darkTheme
            ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
            : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
          color: !darkTheme ? '#ba68c8' : 'whitesmoke',
          filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
          height: '2.5em',
          textShadow: '2px 2px 2px indigo',
        }}
        // label={lightMode ? 'Dark Mode' : 'Light Mode'}
        icon={!darkTheme ? 'pi pi-moon' : 'pi pi-sun'}
        onClick={toggleDarkTheme}
        tooltip={!darkTheme ? 'Switch to dark mode' : 'Switch to light mode'}
        tooltipOptions={{ position: 'bottom' }}
        toggleable="true"
      />
    </div>
  );
};
export default DarkModeToggle;
