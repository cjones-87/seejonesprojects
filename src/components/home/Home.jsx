import { useContext } from 'react';
import {
  IdleClickerPic,
  GuessingGamePic,
  browseBooks,
} from '../../photos/PhotoExports';
import Cube from './Cube';
import GithubActivity from './GithubActivity';
import BusinessCard from '../contactMe/BusinessCard';
import ProjectSlideshow from '../projects/ProjectSlideshow';
import {
  LazyLoadComponent,
  LazyLoadImage,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '.././projects/ProjectsCSS/ProjectSlideshow.css';
import '../../App.css';
import '../contactMe/BusinessCard.css';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  const ProjectData = [
    {
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      caption: 'Hypnotiq 2.0',
    },
    {
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      caption: 'IYKYK',
    },
    {
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      caption: 'Computer Love',
    },
    {
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      caption: 'Hypnotiq',
    },
    {
      image: browseBooks,
      caption: 'Boundz Bookstore',
    },
    {
      image: IdleClickerPic,
      caption: 'Idle Clicker',
    },
    {
      image: GuessingGamePic,
      caption: 'Guessing Game',
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
        <LazyLoadComponent>
          <Cube id="homeCJ" />
        </LazyLoadComponent>
      </div>

      <LazyLoadComponent>
        <ProjectSlideshow slides={ProjectData} />
      </LazyLoadComponent>

      <LazyLoadImage
        effect="blur"
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
        <LazyLoadComponent>
          <BusinessCard />
        </LazyLoadComponent>
      </div>

      <GithubActivity />
    </div>
  );
};

export default Home;
