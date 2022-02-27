import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import './AboutMe.css';

import React from 'react';
import { Card } from 'primereact/card';

export default class AboutMe extends React.Component {
  render() {
    const header = (
      <img
        alt="Card"
        src="images/usercard.png"
        onError={(e) =>
          (e.target.src =
            'https://res.cloudinary.com/practicaldev/image/fetch/s--DiNb_ZuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg')
        }
      />
    );

    return (
      <div className="aboutMeParent">
        <div className="aboutMeChild">
          <Card
            title="Past"
            subTitle="Office Manager/Butcher"
            style={{ width: '25em' }}
            header={header}
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
            header={header}
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
            header={header}
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
