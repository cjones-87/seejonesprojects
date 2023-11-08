import { lazy, Suspense } from 'react';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from '../techSkills/data/TechSkillsData';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import '../../App.css';

const Spinner = lazy(() => import('../../../misc/Spinner'));
const GithubActivity = lazy(() => import('./GithubActivity'));
const ProjectSlideshow = lazy(() => import('../projects/ProjectSlideshow'));
const LazyLoadImage = lazy(() =>
  import('../reusableComponents/lazy/LazyLoadImage')
);
const Home = () => {
  const { darkMode } = useTheme();
  const { width } = useWindowDimensions();

  const ProjectData = [
    {
      alt: 'See Jones Engineer Portfolio Screenshot - CJ Jones - Software Engineer',
      caption: 'SeeJonesEngineer.com',
      image: 'https://i.imgur.com/PVEBzQJ.gif',
    },
    {
      alt: 'Hypnotiq 2.0 Music Player Screenshot - CJ Jones - Software Engineer',
      caption: 'Hypnotiq 2.0',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      image: 'https://i.imgur.com/modvRWr.gif',
    },
    {
      alt: 'Blueprint eCommerce Boilerplate Screenshot - CJ Jones - Software Engineer',
      caption: 'Blueprint Boilerplate',
      image: 'https://i.imgur.com/HOiTb5v.gif',
    },
    {
      alt: 'IYKYK Multiple Choice Quiz Game Screenshot - CJ Jones - Software Engineer',
      caption: 'IYKYK',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      image: 'https://i.imgur.com/mYnBu3I.gif',
    },
    {
      alt: 'Computer Love Dating/Networking App Screenshot - CJ Jones - Software Engineer',
      caption: 'Computer Love',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/2IkB1A9.gif',
    },
    {
      alt: 'Hypnotiq 1.0 Music Player Screenshot - CJ Jones - Software Engineer',
      caption: 'Hypnotiq',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      image: 'https://i.imgur.com/HjTbdr9.gif',
    },
    {
      alt: 'Boundz Bookstore eCommerce Website Screenshot - CJ Jones - Software Engineer',
      caption: 'Boundz Bookstore',
      image: 'https://i.imgur.com/XV1sfOI.gif',
    },
    {
      alt: 'Idle Coffee Clicker Game Screenshot - CJ Jones - Software Engineer',
      caption: 'Idle Clicker',
      image: 'https://i.imgur.com/KfVcjhN.gif',
    },
    {
      alt: 'Guessing Game Screenshot - CJ Jones - Software Engineer',
      caption: 'Guessing Game',
      image: 'https://i.imgur.com/EGYVB8e.gif',
    },
  ];

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        fontSize: '1vmin',
        marginTop: '-1.5rem',
        width,
      }}
    >
      <h1
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          display: 'flex',
          flexDirection: 'column',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          paddingTop: '2rem',
          textAlign: 'center',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        CJ Jones
      </h1>

      <h2
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          display: 'flex',
          flexDirection: 'column',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '8em',
          paddingBottom: '2rem',
          textAlign: 'center',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Software Engineer
      </h2>

      <div
        id='sectionA'
        style={{
          backgroundColor: darkMode
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

      <div id='sectionC' style={{ color: 'whitesmoke' }}>
        <div align='center' id='sectionC1' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Proficient Languages
          </h4>
          {LanguagesData.map((data, index) => (
            <a href={data.href} key={index} rel='noreferrer' target='_blank'>
              <LazyLoadImage
                alt={data.alt}
                height='40'
                key={index}
                src={data.src}
                width='40'
              />
            </a>
          ))}
        </div>

        <div align='center' id='sectionC2' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Familiar (Read-Only) Languages
          </h4>
          <a href='https://www.python.org' target='_blank' rel='noreferrer'>
            <LazyLoadImage
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
              alt='python'
              width='40'
              height='40'
            />
          </a>
        </div>

        <div align='center' id='sectionC1' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Knowledgeable Languages
          </h4>
          <a
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noreferrer'
          >
            <LazyLoadImage
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
              alt='typescript'
              width='40'
              height='40'
            />
          </a>
        </div>
      </div>

      <div id='sectionC' style={{ color: 'whitesmoke', width }}>
        <div className='sectionC2' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Front-End
          </h4>
          {FrontendData.map((data, index) => (
            <a href={data.href} key={index} rel='noreferrer' target='_blank'>
              <LazyLoadImage
                alt={data.alt}
                height='40'
                key={index}
                src={data.src}
                width='40'
              />
            </a>
          ))}
        </div>

        <div className='sectionC1' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Tools
          </h4>

          {ToolsData.map((data, index) => (
            <a href={data.href} key={index} rel='noreferrer' target='_blank'>
              <LazyLoadImage
                alt={data.alt}
                height='40'
                key={index}
                src={data.src}
                width='40'
              />
            </a>
          ))}
        </div>
        <div className='sectionC2' style={{ width: width / 3 }}>
          <h4 align='center' style={{ fontSize: '3em' }}>
            Back-End
          </h4>

          {BackendData.map((data, index) => (
            <a href={data.href} key={index} rel='noreferrer' target='_blank'>
              <LazyLoadImage
                alt={data.alt}
                height='40'
                key={index}
                src={data.src}
                width='40'
              />
            </a>
          ))}
        </div>
      </div>

      <div
        id='sectionC'
        style={{
          color: 'whitesmoke',
          width,
        }}
      >
        <div
          className='sectionC1'
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Web Apps
        </div>
        <div
          className='sectionC2'
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Mobile Apps
        </div>
        <div
          className='sectionC1'
          style={{ fontSize: '3em', width: width / 3 }}
        >
          Websites
        </div>
      </div>

      <div style={{ marginTop: '5rem' }}>
        <Suspense fallback={<Spinner />}>
          <ProjectSlideshow slides={ProjectData} />
        </Suspense>
      </div>
      <Suspense fallback={<Spinner />}>
        <GithubActivity />
      </Suspense>
    </div>
  );
};

export default Home;
