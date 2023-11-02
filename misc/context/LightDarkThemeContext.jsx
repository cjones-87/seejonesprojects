import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const LightDarkThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((current) => !current);

  useEffect(() => {
    const storedTheme = localStorage.getItem('SeeJonesEngineerDarkMode');
    if (storedTheme) {
      setDarkMode(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('SeeJonesEngineerDarkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkThemeContext;
