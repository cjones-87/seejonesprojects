import useTheme from '../../../misc/customHooks/useTheme';
import { Button } from 'primereact/button';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <Button
        className='p-togglebutton'
        id='lightDarkToggleButton'
        style={{
          background: darkMode
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          color: darkMode ? 'whitesmoke' : '#ba68c8',
          filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
          height: '2.5em',
          textShadow: '2px 2px 2px indigo',
        }}
        icon={darkMode ? 'pi pi-sun' : 'pi pi-moon'}
        onClick={toggleDarkMode}
        tooltip={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        tooltipOptions={{ position: 'bottom' }}
        toggleable='true'
      />
    </div>
  );
};
export default DarkModeToggle;
