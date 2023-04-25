import React from 'react';
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

const learningJournalEvents = [
  {
    id: 10,
    status: 'Hypnotiq 2.0',
    date: '2023',
    icon: 'pi pi-star',
    iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
    color: '#FF9800',
    description: 'Mobile Music Player',
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
    description: 'Web Quiz App',
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
    description: 'Personal Portfolio Web App',
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
    description: 'Mobile Dating Networking App',
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
    description: 'Mobile Music Player',
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
    description: 'Secure eCommerce Web App',
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
    description: 'Incremental Game Website',
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
    description: 'Guessing Game Website',
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

export default learningJournalEvents;
