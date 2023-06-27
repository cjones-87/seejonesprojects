import { useContext, Suspense } from 'react';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from '../techSkills/data/TechSkillsData';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
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
  const { width } = useWindowDimensions();

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
        fontSize: '1vmin',
        width,
      }}
    >
      <div id="homeFlex">
        <Suspense fallback={<Spinner />}>
          <Cube id="homeCJ" />
        </Suspense>
      </div>

      <div
        id="sectionA"
        style={{
          backgroundColor: darkTheme
            ? 'rgb(128, 128, 128, 0.3)'
            : 'rgb(75, 0, 130, 0.3)',
          color: 'whitesmoke',
          fontSize: '4em',
          width,
        }}
      >
        I am a freelance software engineer who has a deep passion for learning
        and implementing new technologies. I take great pride in my ability to
        write clean, efficient, and DRY code. As an engineer, I am meticulous
        and have a keen eye for solving problems, allowing me to tackle any
        challenge that comes my way.
      </div>

      <div id="sectionC" style={{ color: 'whitesmoke' }}>
        <div align="center" id="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Proficient Languages
          </h4>
          {LanguagesData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <LazyLoadImage
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>

        <div align="center" id="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Familiar (Read-Only) Languages
          </h4>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <LazyLoadImage
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />
          </a>
        </div>

        <div align="center" id="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Knowledgeable Languages
          </h4>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoadImage
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>

      <div id="sectionC" style={{ color: 'whitesmoke', width }}>
        <div className="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Front-End
          </h4>
          {FrontendData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <LazyLoadImage
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>

        <div className="sectionC1" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Tools
          </h4>

          {ToolsData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <LazyLoadImage
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>
        <div className="sectionC2" style={{ width: width / 3 }}>
          <h4 align="center" style={{ fontSize: '3em' }}>
            Back-End
          </h4>

          {BackendData.map((data, index) => (
            <a href={data.href} key={index} rel="noreferrer" target="_blank">
              <LazyLoadImage
                alt={data.alt}
                height="40"
                key={index}
                src={data.src}
                width="40"
              />
            </a>
          ))}
        </div>
      </div>

      <div
        id="sectionC"
        style={{
          color: 'whitesmoke',
          width,
        }}
      >
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Web Apps
        </div>
        <div
          className="sectionC2"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Mobile Apps
        </div>
        <div
          className="sectionC1"
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Websites
        </div>
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
