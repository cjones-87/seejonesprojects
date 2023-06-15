import { useContext, Suspense } from 'react';
import Spinner from '../../../misc/Spinner';
import Cube from './Cube';
import GithubActivity from './GithubActivity';
import BusinessCard from '../contactMe/BusinessCard';
import ProjectSlideshow from '../projects/ProjectSlideshow';
import LazyLoadImage from '../lazy/LazyLoadImage';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';
import '../contactMe/BusinessCard.css';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  const ProjectData = [
    {
      caption: 'SeeJonesEngineer.com',
      image: 'https://i.imgur.com/PVEBzQJ.gif',
    },
    {
      caption: 'Hypnotiq 2.0',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      image: 'https://i.imgur.com/modvRWr.gif',
    },
    {
      caption: 'Blueprint Boilerplate',
      image: 'https://i.imgur.com/HOiTb5v.gif',
    },
    {
      caption: 'IYKYK',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      image: 'https://i.imgur.com/mYnBu3I.gif',
    },
    {
      caption: 'Computer Love',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/2IkB1A9.gif',
    },
    {
      caption: 'Hypnotiq',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      image: 'https://i.imgur.com/HjTbdr9.gif',
    },
    {
      caption: 'Boundz Bookstore',
      image: 'https://i.imgur.com/XV1sfOI.gif',
    },
    {
      caption: 'Idle Clicker',
      image: 'https://i.imgur.com/KfVcjhN.gif',
    },
    {
      caption: 'Guessing Game',
      image: 'https://i.imgur.com/EGYVB8e.gif',
    },
  ];

  return (
    <div
      className="App"
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width: '100vw',
      }}
    >
      <div id="homeFlex">
        <Suspense fallback={<Spinner />}>
          <Cube id="homeCJ" />
        </Suspense>
      </div>

      <Suspense fallback={<Spinner />}>
        <ProjectSlideshow slides={ProjectData} />
      </Suspense>

      <LazyLoadImage
        alt="Codewars Algo & DSA Activity"
        src="https://www.codewars.com/users/cjones-87/badges/large"
        style={{ marginTop: '2rem' }}
      />

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
        }}
      >
        <Suspense fallback={<Spinner />}>
          <BusinessCard />
        </Suspense>
      </div>

      <GithubActivity />
    </div>
  );
};

export default Home;
