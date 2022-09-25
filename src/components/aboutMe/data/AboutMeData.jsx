import React from 'react';
import MainLogo from '../../../photos/favicon.png';
import BlueShirtSmile from '../../../photos/blueShirtSmile.png';
import LogoCJ from '../../../photos/logoCJ.png';
import Typewriter from 'typewriter-effect';

export const AboutMeData = [
  {
    id: 1,
    image: MainLogo,
    paragraph: (
      <div style={{ fontSize: '2rem' }}>
        I, CJ Jones, am a software engineer living in NYC. I have successfully
        graduated from an immersive full-time software engineering program
        offered by Fullstack Academy. Currently, I freelance for individuals and
        brands across multiple industries.
      </div>
    ),
  },
  {
    id: 2,
    image: BlueShirtSmile,
    paragraph: (
      <div style={{ fontSize: '2rem' }}>
        I have a passion for using technology to create intuitive & visually
        stimulating UI for enhanced user experiences. This, coupled with a
        penchant for furthering my knowledge and SWE skillset, gives me a love
        of combining existing best practices with innovative solutions to solve
        client & company needs.
      </div>
    ),
  },
  {
    id: 3,
    image: LogoCJ,
    paragraph: (
      <div style={{ fontSize: '2rem' }}>
        I enjoy working with libraries/frameworks such as React & React Native
        Expo. I’m looking to grow in my software engineer journey by
        transitioning from freelance. I plan to start a career at a company
        where communication, passion, and innovation go hand in hand.
      </div>
    ),
  },
  {
    id: 4,
    image: BlueShirtSmile,
    paragraph: (
      <div style={{ fontSize: '2rem' }}>
        Currently, I'm looking to collaborate by studying data structures &
        algorithms & working on projects on varying topics. One of my strongest
        passions is entertainment, so I would love to collaborate with
        individuals or groups on anything music, tv/movie, or gaming-related.
      </div>
    ),
  },
];
