import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { end, menuItems } from './NavbarMenuData';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const start = (
    <LazyLoadComponent>
      <div id="navbarLogoContainer">
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
        width: dimensions.width,
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
              verticalAlign: 'middle',
              width: dimensions.width,
            }}
          />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Navbar;
