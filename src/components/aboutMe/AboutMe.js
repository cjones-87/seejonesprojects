import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import './AboutMe.css';

import React from 'react';
import { Card } from 'primereact/card';

import FullstackLogo from '../projects/FullstackLogo.png';

export default class AboutMe extends React.Component {
  render() {
    const handleError = (e) =>
      (e.target.src = 'https://i.imgur.com/xNRiK7S.jpg');

    //
    const header1 = (
      <img
        alt="Card"
        src="https://i.imgur.com/rntgx2i.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px', paddingTop: '1.5rem' }}
      />
    );
    const header2 = (
      <img
        alt="Card"
        src="https://i.imgur.com/CloCABI.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px', paddingTop: '1.5rem' }}
      />
    );
    const header3 = (
      <img
        alt="Card"
        src={FullstackLogo}
        onError={handleError}
        style={{ width: '300px', height: '500px', paddingTop: '1.5rem' }}
      />
    );
    const header4 = (
      <img
        alt="Card"
        src="https://i.imgur.com/Rj1BcqV.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px', paddingTop: '1.5rem' }}
      />
    );
    const header5 = (
      <img
        alt="Card"
        src="https://i.imgur.com/UljMe8v.png"
        onError={handleError}
        style={{ width: '300px', height: '500px', paddingTop: '1.5rem' }}
      />
    );
    //
    const footer1 = (
      <img
        alt="Card"
        src="https://i.imgur.com/3YrHNiX.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px' }}
      />
    );
    const footer2 = (
      <img
        alt="Card"
        src="https://i.imgur.com/gJX3MCz.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px' }}
      />
    );
    const footer3 = (
      <img
        alt="Card"
        src={FullstackLogo}
        onError={handleError}
        style={{ width: '300px', height: '500px' }}
      />
    );
    const footer4 = (
      <img
        alt="Card"
        src="https://i.imgur.com/EAlVmrf.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px' }}
      />
    );
    const footer5 = (
      <img
        alt="Card"
        src="https://i.imgur.com/OUcoUxV.jpg"
        onError={handleError}
        style={{ width: '300px', height: '500px' }}
      />
    );

    return (
      <div
        className="aboutMeParent bg-black-alpha-90"
        style={{ paddingTop: '1rem' }}
      >
        <h1 style={{ color: 'rebeccapurple', paddingBottom: '1rem' }}>
          About Me
        </h1>
        {/* <div className="aboutMeChild">
          <Card
            title="Previous Work"
            subTitle="Butcher/FishMonger"
            style={{ width: '25em' }}
            header={header1}
            footer={footer1}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              In the past, I have worked as a butcher & fishmonger for a gourmet
              supermarket brand. Working as a butcher & fishmonger taught me a
              lot about customer experience. It illuminated the importance &
              necessity of striking & meaningful visuals to garner customer
              interest. Through developing relationships with my clients and
              management, I also learned the value of consistantly offering quality products, in concert with stellar customer service.
            </p>
          </Card>
        </div>

        <div className="aboutMeChild">
          <Card
            title="Previous Work"
            subTitle="Office Manager"
            style={{ width: '25em' }}
            header={header2}
            footer={footer2}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              My time as an office manager for a wildlife company, taught me
              that a strong team is needed, each member with their own strengths
              and weaknesses to compliment each other, as well as solid
              communication. One event that really taught me the importance of
              having a strong foundational basis in place, was related to our
              advertising. At the time, our advertising was being hosted through
              a third-party website service. But one day, the price skyrocketed
              almost overnight. For the same services, we began paying an
              additional 1500-6000% per month. I began to try and create our own
              website, but with no formal training (because custom MySpace pages
              don't count), I struggled immensely. Our profits were way down,
              and our expenses were way up. It was then that I fully realized
              the importance of tech and endeavored to find a way to break into
              MY new industry.
            </p>
          </Card>
        </div>

        <div className="aboutMeChild">
          <Card
            title="Tech Journey Begins"
            subTitle="Fullstack Academy"
            style={{ width: '25em' }}
            header={header3}
            footer={footer3}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              <big>FINALLY!</big> A chance to break into an industry I had been
              struggling to study and understand.&nbsp;
              <big>I JUMPED AT THE OPPORTUNITY</big>&nbsp; when I heard about
              FSA’s Future Code program. It was the chance of a lifetime, and i
              risked it all. After applying and being accepted into the program
              I gave it my all. I bled, sweat, even cried my way through
              understanding so much material in such a short space of time.
              There were times where I really wanted to give up, but my thirst
              for knowledge refused to comply. And It all paid off. I
              successfully completed the program with some pretty neat projects
              under my belt. Since graduation, I’ve had a lot of fun, learning &
              experimenting with the ins and outs of React & React-Native as
              well as various UI frameworks. One of the most important things I
              learned from FSA was HOW to learn.
            </p>
          </Card>
        </div>

        <div className="aboutMeChild">
          <Card
            title="Since Graduation"
            subTitle="Here & Now"
            style={{ width: '25em' }}
            header={header4}
            footer={footer4}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              Presently, I’m looking to find a well balanced team, where I can
              apply my understanding and also learn. My ideal position would
              allow for progressive growth and a healthy work-life balance. When
              I'm not studying new material, or working on a personal/freelance
              project, you'll most likely find me on the beach or relaxing
              spending time with my <big>BEST</big> friend.
            </p>
          </Card>
        </div>

        <div className="aboutMeChild">
          <Card
            title="Future"
            subTitle="Tomorrowland"
            style={{ width: '25em' }}
            header={header5}
            footer={footer5}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              Though some may consider my future goals to be lofty, I truly
              endeavor to leave a legacy. I love both mentoring curious minds
              looking to enter this field, & working within a company to
              continuously improve and expand upon my knowledge and
              skillset;&nbsp; my goal is to truly{' '}
              <big>‘leave it better than I found it.’</big>
            </p>
          </Card>
        </div> */}
      </div>
    );
  }
}
