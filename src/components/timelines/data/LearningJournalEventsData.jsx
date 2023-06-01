import React from 'react';
import {
  IdleClickerPic,
  GuessingGamePic,
  FullstackLogo,
  browseBooks,
  seeJonesEngineer,
} from '../../../photos/PhotoExports';
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

const LearningJournalEventsData = [
  {
    id: 10,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Hypnotiq 2.0
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/hypnotiq2';
    },
  },
  {
    id: 9,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        All I Know Is, IYKYK
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/iykyk';
    },
  },
  {
    id: 8,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        See Jones Engineer
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/seejonesengineer';
    },
  },
  {
    id: 7,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Computer Love
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/computerlove';
    },
  },
  {
    id: 6,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Hypnotiq
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/hypnotiq';
    },
  },
  {
    id: 5,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Graduated Fullstack Academy
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Graduated Coding Bootcamp
      </span>
    ),
    link: 'https://www.fullstackacademy.com/',
    moreInfo: '',
    command: (event) => {
      window.location.href = 'https://www.fullstackacademy.com/';
    },
  },
  {
    id: 4,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Boundz eCommerce
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/boundzbookstore';
    },
  },
  {
    id: 3,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Idle Clicker
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/idleclicker';
    },
  },
  {
    id: 2,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Guessing Game
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
    command: (event) => {
      window.location.href = '/projects/guessinggame';
    },
  },
  {
    id: 1,
    status: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Enrolled Fullstack Academy
      </span>
    ),
    date: (
      <span
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
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
          color:
            localStorage.getItem('lightMode') === 'true'
              ? '#ba68c8'
              : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Enrolled Coding Bootcamp
      </span>
    ),
    link: 'https://www.fullstackacademy.com/',
    moreInfo: '',
    command: (event) => {
      window.location.href = 'https://www.fullstackacademy.com/';
    },
  },
];

export default LearningJournalEventsData;
