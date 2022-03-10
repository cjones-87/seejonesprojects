import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import './AboutMe.css';

import React from 'react';
import { Card } from 'primereact/card';

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
        style={{ width: '400px' }}
      />
    );
    const header2 = (
      <img
        alt="Card"
        src="https://i.imgur.com/ErQMMMG.jpg"
        onError={handleError}
        style={{ width: '400px' }}
      />
    );
    const header3 = (
      <img
        alt="Card"
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJpc3RpYyUyMHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        onError={handleError}
        style={{ width: '400px' }}
      />
    );
    //
    const footer1 = (
      <img
        alt="Card"
        src="https://images.unsplash.com/photo-1633265486501-0cf524a07213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
      <div className="aboutMeParent bg-black-alpha-90">
        <h2 style={{ color: 'rebeccapurple' }}>About Me</h2>
        <div className="aboutMeChild">
          <Card
            title="Past"
            subTitle="Office Manager/Butcher"
            style={{ width: '25em' }}
            header={header1}
            footer={footer1}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              Hello, my name is CJ & I’m a Fullstack Engineer. Before enrolling
              in Fullstack Academy, I have worked as a butcher and office
              manager. Working as a butcher taught me a lot about the importance
              of customer experience as well as visuals to inspire interest.
              While being an office manager, taught me the importance of having
              a strong foundational basis in place. At the time our advertising
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
            title="Present"
            subTitle="Fullstack Academy"
            style={{ width: '25em' }}
            header={header2}
            footer={footer2}
          >
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              I JUMPED AT THE OPPORTUNITY when I heard about FSA’s Future Code
              program. Since graduation, I’ve had a lot of fun, learning &
              experimenting with the ins and outs of React & React-Native as
              well as various UI frameworks. One of the most important things I
              learned from FSA was HOW to learn, & in my learning, I found a
              beautiful UI framework, but the documentation is a bit dated.
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
              One of my long-term goals is to write a custom library or language
              someday. In the short term, I’ve been studying said framework and
              writing out what I’ve learned from experimenting with its
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
