import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { end, menuItems } from './NavbarMenuData';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const start = (
    <LazyLoadComponent>
      <div id="navbarLogoContainer" onClick={handleClick}>
        <NavbarLogo />
      </div>
    </LazyLoadComponent>
  );

  return (
    <div
      className="sticky top-0 "
      id="navbar"
      style={{
        textShadow: '2px 2px 2px #01020E',
        width,
      }}
    >
      <div>
        <LazyLoadComponent
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Menubar
            model={menuItems}
            start={start}
            end={end}
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              width,
            }}
          />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Navbar;
