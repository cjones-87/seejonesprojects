import { useContext } from 'react';
import { ThemeContext } from '../context/LightDarkThemeContext';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw Error(
      'useTheme requires LightDarkModeContext to be used higher in the component tree'
    );
  }

  return theme;
};

export default useTheme;
