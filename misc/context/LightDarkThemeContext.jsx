import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const LightDarkThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => setDarkTheme((current) => !current);

  useEffect(() => {
    const storedTheme = localStorage.getItem('seeJonesEngineerColorTheme');
    if (storedTheme) {
      setDarkTheme(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'seeJonesEngineerColorTheme',
      JSON.stringify(darkTheme)
    );
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkThemeContext;
