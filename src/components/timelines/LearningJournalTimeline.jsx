import { useContext, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import Spinner from '../../../misc/Spinner';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import {
  IdleClickerPic,
  GuessingGamePic,
  FullstackLogo,
  browseBooks,
  seeJonesEngineer,
} from '../../photos/PhotoExports';
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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LearningJournalTimeline = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const LearningJournalEventsData = [
    {
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Hypnotiq 2.0
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2023
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      color: '#FF9800',
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
            src="https://img.icons8.com/color/2x/cloud-firestore.png"
            alt="firestore"
            height={'12rem'}
            width={'12rem'}
          />
        </span>
      ),
      moreInfo: '',
    },
    {
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          All I Know Is, IYKYK
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      color: '#607D8B',
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          See Jones Engineer
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021 - Present
        </span>
      ),
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: seeJonesEngineer,
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
          <i className="pi pi-prime" style={{ fontSize: '1em' }} />
          &nbsp;&nbsp;&nbsp;
          <SiNetlify />
        </span>
      ),
      moreInfo: '',
    },
    {
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Computer Love
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      color: '#673AB7',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Hypnotiq
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2022
        </span>
      ),
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      color: '#FF9800',
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Graduated Fullstack Academy
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Boundz eCommerce
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: browseBooks,
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Idle Clicker
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#673AB7',
      image: IdleClickerPic,
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Guessing Game
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          2021
        </span>
      ),
      icon: 'pi pi-star',
      color: '#FF9800',
      image: GuessingGamePic,
      description: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
      status: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Enrolled Fullstack Academy
        </span>
      ),
      date: (
        <span
          style={{
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
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
        className="custom-marker p-shadow-2"
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
            background: !darkTheme
              ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
              : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
            borderRadius: 25,
            color: !darkTheme ? '#ba68c8' : 'indigo',
            textShadow: !darkTheme
              ? '1px 1px 1px black'
              : '1px 1px 1px whitesmoke',
            justifyContent: 'space-evenly',
            textAlign: 'center',
            paddingTop: '1.5rem',
          }}
        >
          {item.iframe ? (
            <div>
              <Suspense fallback={<Spinner />}>
                <iframe
                  allow="autoplay"
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
              className="p-shadow-2"
              effect="blur"
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
            className="p-button-text"
            label="Learn More"
            onClick={() =>
              item.link[0] === 'h'
                ? window.open(item.link, '_blank')
                : navigate(item.link)
            }
            style={{
              background: !darkTheme
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color: !darkTheme ? 'whitesmoke' : '#ba68c8',
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
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        fontSize: '1vmin',
        textShadow: !darkTheme ? '1px 1px 1px black' : '1px 1px 1px whitesmoke',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <h1
        id="gradientText"
        style={{
          color: !darkTheme ? 'black' : '#434343',
          filter: darkTheme
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
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
};

export default LearningJournalTimeline;
