import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { end, menuItems } from './NavbarMenuData';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
      <iframe
        className="myClassname"
        height={dimensions.height / 10}
        id="myId"
        scrolling="no"
        src="https://3d-box-animation.vercel.app/"
        style={{ border: 0, verticalAlign: 'middle' }}
        width={
          dimensions.width < 650 ? dimensions.width / 5 : dimensions.width / 20
        }
      />
    </LazyLoadComponent>
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
        <LazyLoadComponent>
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
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Navbar;
