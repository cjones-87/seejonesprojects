import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { end, menuItems } from './NavbarMenuData';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });
  console.log(dimensions.width);

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const start = (
    <NavLink to="/">
      {/* <img
          alt="logo"
          src="https://i.imgur.com/zUk8geK.png"
          onError={(e) => (e.target.src = 'https://i.imgur.com/OIdld69.png')}
          height="75vh"
          className="mr-2"
          style={{ borderRadius: '50%' }}
        /> */}
      <LazyLoadComponent>
        <iframe
          className="myClassname"
          height={dimensions.height / 10}
          id="myId"
          scrolling="no"
          src="https://3d-box-animation.ver.app/"
          style={{ border: 0, verticalAlign: 'middle' }}
          width={
            dimensions.width < 650
              ? dimensions.width / 5
              : dimensions.width / 20
          }
        />
      </LazyLoadComponent>
    </NavLink>
  );

  return (
    <div
      className="sticky top-0 App bg-black-alpha-90"
      id="navbar"
      style={{
        textShadow: '2px 2px 2px #01020E',
        width: dimensions.width,
      }}
    >
      <div className="card">
        <Menubar
          model={menuItems}
          start={start}
          end={end}
          style={{
            backgroundColor: '#1a1a1a',
            verticalAlign: 'middle',
            width: dimensions.width,
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
