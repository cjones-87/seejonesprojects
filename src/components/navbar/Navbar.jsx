import { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Navbar = ({ navLinks, start, end }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  const handleItemClick = useCallback((item) => {
    setBurgerActive(false);
  }, []);

  const [burgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  return (
    <nav
      className="navbar"
      id="navbar"
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width,
      }}
    >
      <div className="start">
        {start}
        <ul
          className={`navMenu ${
            burgerActive ? (!darkTheme ? 'active' : 'active dark') : ''
          }`}
        >
          {navLinks.map((item, index) => (
            <li
              className={`menuItem ${burgerActive ? 'active' : ''}`}
              key={index}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div
          className={`navBurger ${burgerActive ? 'active' : ''}`}
          onClick={handleBurgerClick}
        >
          <div className="barGroup">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      <div className="end">{end}</div>
    </nav>
  );
};

export default Navbar;
