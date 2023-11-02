import { lazy, Suspense } from 'react';
import useTheme from '../misc/customHooks/useTheme';
import { useNavigate } from 'react-router-dom';
import {
  FaFilePdf,
  FaHistory,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaMoneyCheckAlt,
} from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import Typewriter from 'typewriter-effect';
import useWindowDimensions from '../misc/customHooks/useWindowDimensions';
import Routes from './navigation/NavigationRoutes';
import './index.css';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Footer = lazy(() => import('./components/footer/Footer'));
const SidePanelMenu = lazy(() => import('./components/menu/SidePanelMenu'));
const DarkModeToggle = lazy(() => import('./components/navbar/DarkModeToggle'));
const NavbarLogo = lazy(() => import('./components/navbar/NavbarLogo'));
const Spinner = lazy(() => import('../misc/Spinner'));

export const Loading = () => (
  <div
    style={{
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Suspense fallback={<div>Loading...</div>}>
      <Spinner />
    </Suspense>
  </div>
);

const App = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const start = (
    <Suspense fallback={<Spinner />}>
      <div id='navbarLogoContainer' onClick={handleClick}>
        <NavbarLogo />
      </div>
    </Suspense>
  );

  const end = (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '1rem',
        paddingRight: '.5em',
        placeContent: 'center',
        verticalAlign: 'middle',
      }}
    >
      <div style={{ paddingLeft: '.5rem', paddingTop: '2rem' }}>
        <Suspense fallback={<Spinner />}>
          <SidePanelMenu />
        </Suspense>
      </div>
      <div style={{ paddingLeft: '1rem' }}>
        <Suspense fallback={<Spinner />}>
          <DarkModeToggle />
        </Suspense>
      </div>
    </div>
  );

  const navMenuStyle = {
    alignItems: 'center',
    color: !darkMode ? 'whitesmoke' : '#ba68c8',
    display: 'flex',
    fontSize: '1rem',
    marginRight: '1rem',
    textShadow: '2px 2px 2px indigo',
  };

  const navIconStyle = {
    marginRight: width < 1200 ? '.5rem' : '.5rem',
  };

  const navLinks = [
    {
      label: (
        <span onClick={() => navigate('/home')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaHome
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'Home',
            }}
          />
        </span>
      ),
    },
    {
      label: (
        <span onClick={() => navigate('/aboutme')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaInfoCircle
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'AboutMe',
            }}
          />
        </span>
      ),
    },
    {
      label: (
        <span onClick={() => navigate('/learningjournal')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaHistory
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'Timeline',
            }}
          />
        </span>
      ),
    },
    {
      label: (
        <span onClick={() => navigate('/projects')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaImages
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'Projects',
            }}
          />
        </span>
      ),
    },
    {
      label: (
        <span onClick={() => navigate('/playgames')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <IoGameController
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'Games',
            }}
          />
        </span>
      ),
    },
    {
      items: [
        {
          command: () => navigate('/resume'),
          icon: 'pi pi-fw pi-file-pdf',
          label: 'View Resumé',
        },
        {
          command: () => window.open('/01CJsSWEPortfolioResume.pdf', '_blank'),
          icon: 'pi pi-download',
          label: 'Download Résumé',
        },
      ],
      label: (
        <span onClick={() => navigate('/resume')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaFilePdf
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            className='resume'
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'Résumé',
            }}
          />
        </span>
      ),
    },
    {
      label: (
        <span onClick={() => navigate('/hireme')} style={navMenuStyle}>
          <div className='navIconContainer'>
            <FaMoneyCheckAlt
              className='navIcon'
              color={!darkMode ? 'whitesmoke' : '#ba68c8'}
              style={navIconStyle}
            />
          </div>
          <Typewriter
            options={{
              autoStart: true,
              cursor: '',
              loop: false,
              strings: 'HireMe',
            }}
          />
        </span>
      ),
      target: 'blank',
    },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar end={end} navLinks={navLinks} start={start} />
        <Routes />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
