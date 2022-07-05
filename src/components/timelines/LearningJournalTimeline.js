import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';

import React, { Component } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Timeline.css';

import IdleClicker from '../projects/IdleClicker.png';
import GuessingGame from '../projects/GuessingGame.png';
import FullstackLogo from '../projects/FullstackLogo.png';
import computerLove from '../projects/computerLove.gif';
import BoundzBookstore from '../projects/BoundzBookstore.png';
import Hypnotiq from '../projects/Hypnotiq.gif';
import seeJonesEngineer from '../individualProjects/photos/SeeJonesEngineer/seeJonesEngineer.png';
import imageNotFound from '../projects/imageNotFound.jpeg';

import BeggingForMore from '../../sounds/BeggingForMore.mp3';

import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { DiJavascript1 } from 'react-icons/di';

import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiHeroku,
  SiMaterialui,
  SiNetlify,
  SiPostgresql,
  SiRedux,
  SiSequelize,
} from 'react-icons/si';

export default class LearningJournalTimeline extends Component {
  constructor(props) {
    super(props);

    const audio = new Audio(BeggingForMore);

    this.events1 = [
      {
        id: 8,
        status: 'See Jones Engineer',
        date: 'Present',
        icon: 'pi pi-star',
        color: '#9C27B0',
        image: seeJonesEngineer,
        description: 'Frontend Personal Portfolio Web App',
        techStack: (
          <span>
            <FaReact />
            &nbsp;&nbsp;&nbsp;
            <ImHtmlFive />
            &nbsp;&nbsp;&nbsp;
            <SiCss3 />
            &nbsp;&nbsp;&nbsp;
            <i className="pi pi-prime" style={{ fontSize: '1em' }} />{' '}
            &nbsp;&nbsp;&nbsp;
            <SiNetlify />
          </span>
        ),
        moreInfo: '',
        command: (event) => {
          setTimeout(
            () => (window.location.href = '/projects/seejonesengineer'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 7,
        status: 'Computer love',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#673AB7',
        image: computerLove,
        description: 'Full Stack Expo Mobile App',

        techStack: (
          <span>
            {' '}
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
          setTimeout(
            () => (window.location.href = '/projects/computerlove'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 6,
        status: 'Hypnotiq',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#FF9800',
        image: Hypnotiq,
        description: 'Frontend Mobile App',
        techStack: (
          <span>
            <FaReact />
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
          setTimeout(() => (window.location.href = '/projects/hypnotiq'), 1200);
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 5,
        status: 'Graduated Fullstack Academy',
        date: '12/2021',
        icon: 'pi pi-star',
        color: '#607D8B',
        image: FullstackLogo,
        description: 'Graduated Coding Bootcamp',
        moreInfo: '',
        command: (event) => {
          setTimeout(
            () => (window.location.href = 'https://www.fullstackacademy.com/'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 4,
        status: 'Boundz eCommerce',
        date: '12/2021',
        icon: 'pi pi-star',
        color: '#9C27B0',
        image: BoundzBookstore,
        description: 'Full Stack Secure eCommerce',
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
          setTimeout(
            () => (window.location.href = '/projects/boundzbookstore'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 3,
        status: 'Idle Clicker',
        date: '10/2021',
        icon: 'pi pi-star',
        color: '#673AB7',
        image: IdleClicker,
        description: 'Idle click and accrue game.',
        techStack: (
          <span>
            <FaNodeJs />
            &nbsp;&nbsp;&nbsp;
            <ImHtmlFive />
            &nbsp; &nbsp;&nbsp;
            <SiCss3 />
          </span>
        ),
        moreInfo: '',
        command: (event) => {
          setTimeout(
            () => (window.location.href = '/projects/idleclicker'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 2,
        status: 'Guessing Game',
        date: '09/2021',
        icon: 'pi pi-star',
        color: '#FF9800',
        image: GuessingGame,
        description: 'Guess the number in 5 guesses or less.',
        techStack: (
          <span>
            <FaNodeJs />
            &nbsp;&nbsp;&nbsp;
            <ImHtmlFive />
            &nbsp;&nbsp;&nbsp;
            <SiCss3 />
          </span>
        ),
        moreInfo: '',
        command: (event) => {
          setTimeout(
            () => (window.location.href = '/projects/guessinggame'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
      {
        id: 1,
        status: 'Enrolled Fullstack Academy',
        date: '06/2021',
        icon: 'pi pi-star',
        color: '#607D8B',
        image: FullstackLogo,
        description: 'Enrolled Coding Bootcamp',
        moreInfo: '',
        command: (event) => {
          setTimeout(
            () => (window.location.href = 'https://www.fullstackacademy.com/'),
            1200
          );
          let playAudio = (event) => {
            audio.play();
          };
          playAudio();
        },
      },
    ];
  }

  render() {
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
        <Card title={item.status} subTitle={item.date}>
          {item.image && (
            <img
              src={item.image}
              onError={(e) => (e.target.src = imageNotFound)}
              alt={item.name}
              width={200}
              className="p-shadow-2"
            />
          )}
          <p>{item.description}</p>
          <p>{item.techStack}</p>
          <Button
            label="Read more"
            className="p-button-text"
            onClick={item.command}
          />
        </Card>
      );
    };

    return (
      <div
        className="timeline-demo bg-black-alpha-90"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
          paddingTop: '1rem',
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
        <div className="card">
          <Timeline
            value={this.events1}
            align="alternate"
            className="customized-timeline"
            marker={customizedMarker}
            content={customizedContent}
          />
        </div>
      </div>
    );
  }
}
