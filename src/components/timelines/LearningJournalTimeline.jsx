import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import { FullstackLogo } from '../../photos/PhotoExports';
import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiHeroku,
  SiMaterialui,
  SiNetlify,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Spinner = lazy(() => import('../../../misc/Spinner'));
const LazyLoadImage = lazy(() => import('../lazy/LazyLoadImage'));
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const LearningJournalTimeline = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const LearningJournalEventsData = [
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Boilerplate Template
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2023
        </span>
      ),
      icon: 'pi pi-star',
      color: '#673AB7',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/HOiTb5v.gif',

      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          eCommerce Boilerplate Template
        </span>
      ),
      link: '/projects/blueprintboilerplate',
      techStack: (
        <span>
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <FaNodeJs />
          &nbsp;&nbsp;&nbsp;
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <SiRedux />
          &nbsp;&nbsp;&nbsp;
          <SiPostgresql />
          &nbsp;&nbsp;&nbsp;
          <SiSequelize />
          &nbsp;&nbsp;&nbsp;
          <SiExpress />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;Bcrypt&nbsp;&nbsp;&nbsp;JWT
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Hypnotiq 2.0
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2023
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      image: 'https://i.imgur.com/modvRWr.gif',
      color: '#FF9800',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Mobile Music Player
        </span>
      ),
      link: '/projects/hypnotiq2',
      techStack: (
        <span>
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <FaMobileAlt />
          &nbsp;&nbsp;&nbsp;
          <SiExpo />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <SiFirebase />
          &nbsp;&nbsp;&nbsp;
          <img
            src='https://img.icons8.com/color/2x/cloud-firestore.png'
            alt='firestore'
            height={'12rem'}
            width={'12rem'}
          />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          All I Know Is, IYKYK
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      image: 'https://i.imgur.com/mYnBu3I.gif',
      color: '#607D8B',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Web Quiz App
        </span>
      ),
      link: '/projects/iykyk',
      techStack: (
        <span>
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <SiTypescript />
          &nbsp;&nbsp;&nbsp;
          <SiThreedotjs />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <SiVercel />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          See Jones Engineer
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021 - Present
        </span>
      ),
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: 'https://i.imgur.com/PVEBzQJ.gif',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Personal Portfolio Web App
        </span>
      ),
      link: '/projects/seejonesengineer',
      techStack: (
        <span>
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <i className='pi pi-prime' style={{ fontSize: '1em' }} />
          &nbsp;&nbsp;&nbsp;
          <SiNetlify />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Computer Love
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      color: '#673AB7',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/2IkB1A9.gif',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Mobile Dating/Networking App
        </span>
      ),
      link: '/projects/computerlove',
      techStack: (
        <span>
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <FaMobileAlt />
          &nbsp;&nbsp;&nbsp;
          <SiExpo />
          &nbsp;&nbsp;&nbsp;
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <FaNodeJs />
          &nbsp;&nbsp;&nbsp;
          <SiPostgresql />
          &nbsp;&nbsp;&nbsp;
          <SiSequelize />
          &nbsp;&nbsp;&nbsp;
          <SiRedux />
          &nbsp;&nbsp;&nbsp;
          <SiExpress />
          &nbsp;&nbsp;&nbsp;
          <SiHeroku />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp; Bcrypt&nbsp;&nbsp;&nbsp;JWT
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Hypnotiq
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      image: 'https://i.imgur.com/HjTbdr9.gif',
      color: '#FF9800',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Mobile Music Player
        </span>
      ),
      link: '/projects/hypnotiq',
      techStack: (
        <span>
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <FaMobileAlt />
          &nbsp;&nbsp;&nbsp;
          <SiExpo />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <SiHeroku />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Graduated Fullstack Academy
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#607D8B',
      image: FullstackLogo,
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Graduated Coding Bootcamp
        </span>
      ),
      link: 'https://www.fullstackacademy.com/',
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Boundz eCommerce
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: 'https://i.imgur.com/XV1sfOI.gif',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Secure eCommerce Web App
        </span>
      ),
      link: '/projects/boundzbookstore',
      techStack: (
        <span>
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <FaNodeJs />
          &nbsp;&nbsp;&nbsp;
          <FaReact />
          &nbsp;&nbsp;&nbsp;
          <SiRedux />
          &nbsp;&nbsp;&nbsp;
          <SiPostgresql />
          &nbsp;&nbsp;&nbsp;
          <SiSequelize />
          &nbsp;&nbsp;&nbsp;
          <SiMaterialui />
          &nbsp;&nbsp;&nbsp;
          <SiExpress />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp; <SiHeroku />
          &nbsp;&nbsp;&nbsp;
          <SiVercel />
          &nbsp;&nbsp;&nbsp;Bcrypt&nbsp;&nbsp;&nbsp;JWT
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Idle Clicker
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#673AB7',
      image: 'https://i.imgur.com/KfVcjhN.gif',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Incremental Game Website
        </span>
      ),
      link: '/projects/idleclicker',
      techStack: (
        <span>
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp; &nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <SiVercel />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Guessing Game
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#FF9800',
      image: 'https://i.imgur.com/EGYVB8e.gif',
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Guessing Game Website
        </span>
      ),
      link: '/projects/guessinggame',
      techStack: (
        <span>
          <DiJavascript1 />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;
          <SiVercel />
        </span>
      ),
      moreInfo: '',
    },
    {
      alt: '',
      status: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Enrolled Fullstack Academy
        </span>
      ),
      date: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#607D8B',
      image: FullstackLogo,
      description: (
        <span
          style={{
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Enrolled Coding Bootcamp
        </span>
      ),
      link: 'https://www.fullstackacademy.com/',
      moreInfo: '',
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className='custom-marker p-shadow-2'
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Suspense fallback={<Spinner />}>
        <Card
          title={item.status}
          subTitle={item.date}
          style={{
            background: darkMode
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
            borderRadius: 25,
            color: darkMode ? 'indigo' : '#ba68c8',
            textShadow: darkMode
              ? '1px 1px 1px whitesmoke'
              : '1px 1px 1px black',
            justifyContent: 'space-evenly',
            textAlign: 'center',
            paddingTop: '1.5rem',
          }}
        >
          {!item.image ? (
            <div>
              <Suspense fallback={<Spinner />}>
                <iframe
                  allow='autoplay'
                  height={height / 3}
                  onError={handleImageFailure}
                  src={item.iframe}
                  style={{
                    border: 0,
                    borderRadius: 25,
                  }}
                  width={width / 2.5}
                />
              </Suspense>
            </div>
          ) : (
            <LazyLoadImage
              alt={item.name}
              className='p-shadow-2'
              height={height / 3}
              onError={handleImageFailure}
              src={item.image}
              style={{
                borderRadius: 25,
                padding: 10,
              }}
              width={width / 2.5}
            />
          )}
          <p>{item.description}</p>
          <p>{item.techStack}</p>

          <Button
            className='p-button-text'
            label='Learn More'
            onClick={() =>
              item.link[0] === 'h'
                ? window.open(item.link, '_blank')
                : navigate(item.link)
            }
            style={{
              background: darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkMode ? '#ba68c8' : 'whitesmoke',
              textShadow: '2px 2px 2px indigo',
            }}
          />
        </Card>
      </Suspense>
    );
  };

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        fontSize: '1vmin',
        textShadow: darkMode ? '1px 1px 1px whitesmoke' : '1px 1px 1px black',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <Head
        title='Coding Chronicles: A Journey in Software Engineering'
        description={`Dive into the evolution of my skills and experiences in the world of software engineering. This timeline serves as a dynamic learning journal, chronicling each project undertaken and the educational milestones achieved on the path to becoming a proficient software engineer. Join me in this digital diary, where each entry unveils the challenges, triumphs, and invaluable lessons learned. From coding projects to educational pursuits, witness the growth and development that shape my journey in the ever-evolving realm of software engineering.`}
      />

      <h1
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          textAlign: 'center',
          paddingBottom: '1.5rem',
        }}
      >
        Learning Journal
      </h1>
      <div style={{ padding: '2rem' }}>
        <Timeline
          value={LearningJournalEventsData}
          align='alternate'
          className='customized-timeline'
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
};

export default LearningJournalTimeline;
