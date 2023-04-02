import React, { useEffect, useState } from 'react';
import SidePanelMenu from '../menu/SidePanelMenu';
import DarkModeToggle from '../home/DarkModeToggle';
import Typewriter from 'typewriter-effect';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Menubar } from 'primereact/menubar';
import { Tooltip } from 'primereact/tooltip';
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

  const resumeTooltip = 'Right Click to Open in New Window & Download';

  const menuItems = [
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }} // classic rose rgb(251,204,231)
          to="/home"
        >
          <Typewriter
            options={{
              strings: 'Home',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-home',
    },
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/aboutme"
        >
          <Typewriter
            options={{
              strings: 'About Me',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-info-circle',
    },
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/learningjournal"
        >
          <Typewriter
            options={{
              strings: 'Learning Journal',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-history',
    },
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/projects"
        >
          <Typewriter
            options={{
              strings: 'Projects',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-images',
    },
    {
      label: (
        <NavLink
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/playgames"
        >
          <Typewriter
            options={{
              strings: 'Interactive Games',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-play',
    },
    {
      label: (
        <NavLink
          className="resume"
          data-pr-position="bottom"
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/resume"
        >
          <Tooltip target=".resume" content={`${resumeTooltip}`} />
          <Typewriter
            options={{
              strings: 'Resumé',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-file-pdf',
    },
    {
      label: (
        <NavLink
          className="hireme"
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ce92d8'
                : 'whitesmoke',
          }}
          to="/hireme"
        >
          <Typewriter
            options={{
              strings: 'Hire Me',
              autoStart: true,
              loop: false,
            }}
          />
        </NavLink>
      ),
      icon: 'pi pi-fw pi-dollar',
      // target: 'blank',
    },
  ];

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
          onError={
            <img
              alt="logo"
              src="https://i.imgur.com/zUk8geK.png"
              height="75vh"
              className="mr-2"
              style={{ borderRadius: '50%' }}
            />
          }
          scrolling="no"
          src="https://3d-box-animation.vercel.app/"
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

  const end = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        verticalAlign: 'middle',
      }}
    >
      <div style={{ paddingTop: '1.5rem' }}>
        <SidePanelMenu />
      </div>
      <div style={{ paddingLeft: '1rem', paddingTop: '1.5rem' }}>
        <DarkModeToggle />
      </div>
    </div>
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
