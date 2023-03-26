import React, { Suspense, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Spinner from '../../misc/Spinner';
import {
  IdleClickerPic,
  GuessingGamePic,
  FullstackLogo,
  browseBooks,
  seeJonesEngineer,
  imageNotFound,
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

const LearningJournalTimeline = () => {
  const iframeIndices = [6, 7, 9, 10];
  const handleError = (e) => {
    e.target.src = imageNotFound;
    e.onerror = null;
    return e;
  };

  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const learningJournalEvents = [
    {
      id: 10,
      status: 'Hypnotiq 2.0',
      date: '2022',
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      color: '#FF9800',
      description: 'Frontend Mobile App',
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
      command: (event) => {
        window.location.href = '/projects/hypnotiq2';
      },
    },
    {
      id: 9,
      status: `All I Know Is, IYKYK`,
      date: '2022',
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      color: '#607D8B',
      description: 'Frontend SPA Multiple Choice Quiz',
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
      command: (event) => {
        window.location.href = '/projects/iykyk';
      },
    },
    {
      id: 8,
      status: 'See Jones Engineer',
      date: 'Present',
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: seeJonesEngineer,
      description: 'Frontend Personal Portfolio Web App',
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
      command: (event) => {
        window.location.href = '/projects/seejonesengineer';
      },
    },
    {
      id: 7,
      status: 'Computer love',
      date: '2022',
      icon: 'pi pi-star',
      color: '#673AB7',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      description: 'Full Stack Expo Mobile App',
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
      command: (event) => {
        window.location.href = '/projects/computerlove';
      },
    },
    {
      id: 6,
      status: 'Hypnotiq',
      date: '2022',
      icon: 'pi pi-star',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      color: '#FF9800',
      description: 'Frontend Mobile App',
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
      command: (event) => {
        window.location.href = '/projects/hypnotiq';
      },
    },
    {
      id: 5,
      status: 'Graduated Fullstack Academy',
      date: '2021',
      icon: 'pi pi-star',
      color: '#607D8B',
      image: FullstackLogo,
      description: 'Graduated Coding Bootcamp',
      link: 'https://www.fullstackacademy.com/',
      moreInfo: '',
      command: (event) => {
        window.location.href = 'https://www.fullstackacademy.com/';
      },
    },
    {
      id: 4,
      status: 'Boundz eCommerce',
      date: '2021',
      icon: 'pi pi-star',
      color: '#9C27B0',
      image: browseBooks,
      description: 'Full Stack Secure eCommerce',
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
          <SiHeroku />
          &nbsp;&nbsp;&nbsp;
          <ImHtmlFive />
          &nbsp;&nbsp;&nbsp;
          <SiCss3 />
          &nbsp;&nbsp;&nbsp;Bcrypt&nbsp;&nbsp;&nbsp;JWT
        </span>
      ),
      moreInfo: '',
      command: (event) => {
        window.location.href = '/projects/boundzbookstore';
      },
    },
    {
      id: 3,
      status: 'Idle Clicker',
      date: '2021',
      icon: 'pi pi-star',
      color: '#673AB7',
      image: IdleClickerPic,
      description: 'Idle click and accrue game.',
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
      command: (event) => {
        window.location.href = '/projects/idleclicker';
      },
    },
    {
      id: 2,
      status: 'Guessing Game',
      date: '2021',
      icon: 'pi pi-star',
      color: '#FF9800',
      image: GuessingGamePic,
      description: 'Guess the number in 5 guesses or less.',
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
      command: (event) => {
        window.location.href = '/projects/guessinggame';
      },
    },
    {
      id: 1,
      status: 'Enrolled Fullstack Academy',
      date: '2021',
      icon: 'pi pi-star',
      color: '#607D8B',
      image: FullstackLogo,
      description: 'Enrolled Coding Bootcamp',
      link: 'https://www.fullstackacademy.com/',
      moreInfo: '',
      command: (event) => {
        window.location.href = 'https://www.fullstackacademy.com/';
      },
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
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-40'
              : 'bg-gray-alpha-80'
          }
          title={item.status}
          subTitle={item.date}
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'whitesmoke'
                : 'indigo',
            textShadow:
              localStorage.getItem('lightMode') === 'true'
                ? '1px 1px 1px black'
                : '1px 1px 1px whitesmoke',
            justifyContent: 'space-evenly',
            textAlign: 'center',
            paddingTop: '1.5rem',
          }}
        >
          {iframeIndices.includes(item.id) ? (
            <div>
              <Suspense fallback={<Spinner />}>
                <iframe
                  allow="autoplay"
                  height={dimensions.height / 3}
                  // frameBorder={0}
                  onError={handleError}
                  src={item.iframe}
                  style={{
                    border: 0,
                    borderRadius: 25,
                  }}
                  width={dimensions.width / 2.5}
                />
              </Suspense>
            </div>
          ) : (
            <LazyLoadImage
              alt={item.name}
              className="p-shadow-2"
              effect="blur"
              height={dimensions.height / 3}
              onError={handleError}
              src={item.image}
              style={{
                borderRadius: 25,
                padding: 10,
              }}
              width={dimensions.width / 2.5}
            />
          )}
          <p>{item.description}</p>
          <p>{item.techStack}</p>
          <Button
            label={
              <a href={item.link} target="_blank">
                Learn More
              </a>
            }
            className="p-button-text"
            style={{
              backgroundColor: '#ce93d8',
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : 'indigo',
            }}
          />
        </Card>
      </Suspense>
    );
  };

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'timeline-demo bg-black-alpha-20'
          : 'timeline-demo bg-black-alpha-90'
      }
      style={{
        color: 'white',
        textShadow:
          localStorage.getItem('lightMode') === 'true'
            ? '1px 1px 1px black'
            : '1px 1px 1px whitesmoke',
        paddingTop: '1rem',
        width: dimensions.width,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'rebeccapurple',
          paddingBottom: '1.5rem',
        }}
      >
        Learning Journal
      </h1>
      <div className="card" style={{ padding: '2rem' }}>
        <Timeline
          value={learningJournalEvents}
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
