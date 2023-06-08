import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const LightDarkThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => setDarkTheme((current) => !current);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkThemeContext;
