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
import BootcampDiploma from '../projects/BootcampDiploma.jpg';
import computerLove from '../projects/computerLove.gif';
import BoundzBookstore from '../projects/BoundzBookstore.png';
import Hypnotiq from '../projects/Hypnotiq.gif';
import SeeJonesEngineer from '../projects/SeeJonesEngineer.png';
import imageNotFound from '../projects/imageNotFound.jpeg';

export default class LearningJournalTimeline extends Component {
  constructor(props) {
    super(props);

    this.events1 = [
      {
        id: 8,
        status: 'See Jones Engineer',
        date: '2/2022',
        icon: 'pi pi-star',
        color: '#9C27B0',
        image: SeeJonesEngineer,
        description: 'Frontend Personal Portfolio Web App',
        techStack: 'React, CSS, PrimeReact UI',
        moreInfo: '',
      },
      {
        id: 7,
        status: 'Computer love',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#673AB7',
        image: computerLove,
        description: 'Full Stack Expo Mobile App',
        techStack:
          'React Native Expo, Javascript, Node.js, PostgreSQL, Sequelize, Redux, Heroku, Bcrypt, JWT',
        moreInfo: '',
      },
      {
        id: 6,
        status: 'Hypnotiq',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#FF9800',
        image: Hypnotiq,
        description: 'Frontend Mobile App',
        techStack: 'React Native Expo',
        moreInfo: '',
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
      },
      {
        id: 4,
        status: 'Boundz eCommerce',
        date: '12/2021',
        icon: 'pi pi-star',
        color: '#9C27B0',
        image: BoundzBookstore,
        description: 'Full Stack Secure eCommerce',
        techStack:
          'Node.js, Javascript, React, Redux, MUI, Heroku, Bcrypt, JWT',
        moreInfo: '',
      },
      {
        id: 3,
        status: 'Idle Clicker',
        date: '10/2021',
        icon: 'pi pi-star',
        color: '#673AB7',
        image: IdleClicker,
        description: 'Idle click and accrue game.',
        techStack: 'Vanilla JS, HTML, CSS',
        moreInfo: '',
      },
      {
        id: 2,
        status: 'Guessing Game',
        date: '09/2021',
        icon: 'pi pi-star',
        color: '#FF9800',
        image: GuessingGame,
        description: 'Guess the number in 5 guesses or less.',
        techStack: 'Vanilla JS, HTML, CSS',
        moreInfo: '',
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
          <Button label="Read more" className="p-button-text"></Button>
        </Card>
      );
    };

    return (
      <div className="timeline-demo bg-black-alpha-90">
        <h2 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
          Learning Journal
        </h2>
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
