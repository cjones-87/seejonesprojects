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
        style={{ width: '300px', paddingTop: '1.5rem' }}
      />
    );
    const header2 = (
      <img
        alt="Card"
        src={FullstackLogo}
        onError={handleError}
        style={{ width: '300px', paddingTop: '1.5rem' }}
      />
    );
    const header3 = (
      <img
        alt="Card"
        src="https://images.unsplash.com/photo-1595670322505-4de61b9cdf47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        onError={handleError}
        style={{ width: '300px', paddingTop: '1.5rem' }}
      />
    );
    //
    const footer1 = (
      <img
        alt="Card"
        src="https://i.imgur.com/gJX3MCz.jpg"
        onError={handleError}
        style={{ width: '300px' }}
      />
    );
    const footer2 = (
      <img
        alt="Card"
        src="https://images.unsplash.com/photo-1609643242182-7e85dfad9037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        onError={handleError}
        style={{ width: '300px' }}
      />
    );
    const footer3 = (
      <img
        alt="Card"
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJpc3RpYyUyMHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        onError={handleError}
        style={{ width: '300px' }}
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
        <div className="aboutMeChild">
          <Card
            title="Past Jobs"
            subTitle="Office Manager/Butcher"
            style={{ width: '25em' }}
            header={header1}
            footer={footer1}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              In the past, I have worked as a butcher and office manager.
              Working as a butcher taught me a lot about the importance of
              customer experience as well as visuals to inspire interest. My
              time as an office manager, taught me the importance of having a
              strong foundational basis in place. At the time our advertising
              was hosted through a third-party website service, & the price
              skyrocketed overnight. For the same services, we were paying an
              additional 1500-6000% per month. It was then that I fully realized
              the importance of tech and endeavored to find a way to break into
              the industry.
            </p>
          </Card>
        </div>

        <div className="aboutMeChild">
          <Card
            title="Fullstack Academy"
            subTitle="FSA"
            style={{ width: '25em' }}
            header={header2}
            footer={footer2}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              I JUMPED AT THE OPPORTUNITY when I heard about FSA’s Future Code
              program. Since graduation, I’ve had a lot of fun, learning &
              experimenting with the ins and outs of React & React-Native as
              well as various UI frameworks. One of the most important things I
              learned from FSA was HOW to learn.
            </p>
          </Card>
        </div>
        <div className="aboutMeChild">
          <Card
            title="Future"
            subTitle="Here & Now"
            style={{ width: '25em' }}
            header={header3}
            footer={footer3}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              One of my long-term goals is to write my own programming language
              someday. In the short term, I’ve been studying multiple languages
              and writing out what I’ve learned from experimenting with its
              implementation. Once done, I plan to approach the developers with
              my notes and implementations for their possible inclusion in the
              documentation.
            </p>
          </Card>
        </div>
      </div>
    );
  }
}
